import connect from "../../lib/mongodb";
import startupSchema from "../../model/startupSchema";

connect()

export default async function handler(req,res){

    const {emailProfessional,password}=req.body
    const startup = await startupSchema.findOne({emailProfessional,password})
    res.redirect('/startup')
    if(!startup){
        return res.json({status:'Not able to find the admin'})
    }
    else{
        res.redirect('/startup')
    }
}