import connect from "../../lib/mongodb";
import adminSchema from "../../model/adminSchema";

connect()

export default async function handler(req,res){

    const {username,password}=req.body
    const admin = await adminSchema.findOne({username,password})
    if(!admin){
        return res.json({status:'Not able to find the admin'})
    }
    else{
        res.redirect('/')
    }
}