import connect from "../../lib/mongodb";
import startupSchema from "../../model/startupSchema";

connect()

export default async function handler(req,res){
    // try {
    //     const startup = await startupSchema.create(req.body);
    //     res.redirect('/startup')
    //     if(!startup){
    //         return res.json({"code":'Startup not created'})
    //     }
    // } catch (error) {
    //     console.log(error);
    //     res.status(400).json({status:'Not able to create a new startup.'})
    // }
    const startup = await startupSchema.create(req.body);
        res.redirect('/startup')
}