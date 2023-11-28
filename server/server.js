const express = require("express")
const app = express()
const _PORT = process.env.PORT;
app.use(express.json())

const cors = require("cors")
app.use(cors())


const mongoose = require("mongoose")
const username = process.env.USERNAME,
      password = process.env.PASSWORD,
      database = process.env.DB;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.5ngb9jm.mongodb.net/${database}?retryWrites=true&w=majority`)


const UserModel = require('./models/Users')

app.get("/users",async(req,res)=>{
    const users = await UserModel.find();
    res.json(users)
})

app.post("/createUser",async(req,res)=>{
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json(req.body)
})

app.listen(_PORT, ()=> {
    console.log("Server Worrrk !!")
})