import connect from "../../lib/mongodb";
import User from "../../model/schema";

connect()

export default async function handler(req,res){
    try {
        const user = await User.create(req.body);
        res.redirect('/user')
        if(!user){
            return res.json({"code":'User not created'})
        }
    } catch (error) {
       // console.log(error);
        res.status(400).json({status:'Not able to create a new user.'})
    }
}