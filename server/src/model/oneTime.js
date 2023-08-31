import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    urlId:{
        type:String,
        required:true,
        trim:true
    },
    content:{
        type:String,
        required:true,
        trim:true
    },
    url:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    },
    expiryTime:{
        type:Date
    },
    accessTime:{
        type:Date
    },
    userIp:{
        type:String,
    },
    isAccessed:{
        type:Boolean,
        default:false
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
});

const DataModel = new mongoose.model("oneTime",dataSchema);
export {DataModel};
