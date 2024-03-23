import express from "express";
import mongoose from "mongoose";
import User from "./model/user.js";

const port=3000;

const app=express();
app.use(express.static("public"));
// app.set('view engine','ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

await mongoose.connect("mongodb://localhost:27017/profile");

app.get("/",(req,res)=>{
    res.render("index.ejs",{success:''});
})

app.post("/contact",async(req,res)=>{
  try {
    const data = new User(req.body);
    const savedData = await data.save();

    res.render('index.ejs',{success:'Data Stored'});
    // console.log('Data saved:', savedData);
    // res.status(200).json({ message: 'Data saved successfully', conditionMet });
} catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Error saving data' });
}

    
 })

app.listen(port,()=>{
    console.log("server connected");
})