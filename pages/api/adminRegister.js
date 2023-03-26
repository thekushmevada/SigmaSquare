import connect from "../../lib/mongodb";
import adminSchema from "../../model/adminSchema";

connect()

export default async function handler(req,res){
    try {
        const admin = await adminSchema.create(req.body);
        res.redirect('/user')
        if(!admin){
            return res.json({"code":'Admin not created'})
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({status:'Not able to create a admin.'})
    }
}