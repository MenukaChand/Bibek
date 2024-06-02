import express from 'express';
import zod, { Schema } from 'zod';
import cors from 'cors';
import mongoose from 'mongoose';
const port = 4001;
const app = express();
app.use(cors());
app.use(express.json());



mongoose.connect("mongodb+srv://pantsantosh:bzCzDVSfTSBiutWz@cluster0.g3kc3lr.mongodb.net/bibek");

const SchemaForLogin = new mongoose.Schema({email: String, password: String});

const loginDB = mongoose.model("data", SchemaForLogin);



app.post('/login', async (req, res)=>{
    try{
        console.log("Reached first line");
        
        const email = req.body.email;
        const password = req.body.password;
        console.log("email is " + email + " password is "+ password);
        
        const putdata = new loginDB({email: email, password: password});
        await putdata.save();

        res.json({
            "success": true,
            "message": "success"
        })

    } catch(e:any){
        // console.log(e);
        
        res.json({
            "success": false,
            "message": "Try Again"
        })
    }
   

})

app.get('/',(req, res)=>{
    res.send("Deployed")
})

app.listen(port, ()=>{
console.log("Deployed");

})


