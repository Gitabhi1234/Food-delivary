const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors());
const cookieParser=require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(cookieParser());

app.get('/',function(req,res){
    res.send("you done it");
});

module.exports=app;