//collection
// import { DataModel } from "../../model/oneTime.js";
const { DataModel } =  require("../../model/oneTime.js");

class OneTime {
     getAllUrlData = async (req,res) =>{
        try {
           // Get All url data
           const urlData = await DataModel.find({isDeleted: false});
            
          return res.status(200).json({status:200,data:urlData});
        } catch (error) {
            return res.status(400).json({status:400,error:error.message});
        }
    }

     getSingleUrlData = async (req,res) => {
        try {
            const { urlId } = req.params;

           // Get url data
           const urlData = await DataModel.findOne({ urlId,isDeleted:false });
            
           if(!urlData) return res.status(404).json({status:404,message:"Not Found"});

          return res.status(200).json({status:200,data:urlData});
        } catch (error) {
            return res.status(400).json({status:400,error:error.message});
        }
    }

     deleteUrlData = async(req,res) => {
        try {
            const { urlId } = req.params;

            const getUrlData = await DataModel.findOne({ urlId,isDeleted:false });

            if(!getUrlData) return res.status(404).json({status:404,message:"Not Found"});

            await DataModel.findByIdAndUpdate({ _id:getUrlData._id },{ isDeleted:true },{ new:true });

            return res.status(200).json({status:200,message:"Url Deleted Successfully."});
        } catch (error) {
            return res.status(400).json({status:400,error:error.message});
        }
    }
}

const oneTime = new OneTime();
module.exports = { oneTime };