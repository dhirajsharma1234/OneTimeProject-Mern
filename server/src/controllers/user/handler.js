import crypto from "crypto";
//collection
import { DataModel } from "../../model/oneTime.js";
import { requestId } from "../../util/requestId.js";

class OneTime {
    createData = async(req,res) =>{
        try {
            const { content } = req.body;
            const token = crypto.randomBytes(4).toString("hex");
            const url = `http://localhost:5173/${token}`;

            const urlId = requestId();

            const expireIn = 2*1000*60;

            await DataModel.create({
                urlId,
                content,
                token,
                url,
                expiryTime:Date.now()+expireIn
            });
            
          return res.status(201).json({status:201,data:content,url});
        } catch (error) {
            return res.status(400).json({status:400,error:error.message});
        }
    }

    accessData = async(req,res) =>{
        try {
            const { token } = req.params;

             // Check if the token exists and hasn't been accessed before
            const tokenData = await DataModel.findOne({ token });

            if(!tokenData) return res.status(404).json({status:404,message:"Not Found."});
            
            if(tokenData.isAccessed) return res.status(400).json({status:400,message:"This note is not available."});

            // Check if the token is still valid (not expired)
            const tokenCheck = await DataModel.findOne({token,expiryTime:{ $gt: Date.now() }});
            if(!tokenCheck) return res.status(400).json({status:400,message:"Token expired."});
            
            // Update tokenData to mark it as accessed
            await DataModel.findOneAndUpdate({ _id:tokenData._id },{ isAccessed:true,accessTime:Date.now(),userIp:req.ip },{ new:true });

            return res.status(200).json({status:200,content: tokenData.content});
        } catch (error) {
            return res.status(400).json({status:400,error:error.message});
        }
    }

    // accessData = async(req,res) =>{
    //     try {
    //         const { token } = req.params;

    //          // Check if the token exists and hasn't been accessed before
    //         const tokenData = await DataModel.findOne({ token });

    //         if(!tokenData) 
    //         return res.status(404).json({status:404,message:"Not Found."});
        
    //         const data = await DataModel.findOneAndDelete({_id:tokenData._id});
        
    //         return res.status(200).json({status:200,data: data.content});
    //     } catch (error) {
    //         return res.status(400).json({status:400,error:error.message});
    //     }
    // }
}

const oneTime = new OneTime();
export { oneTime };