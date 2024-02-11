const express= require('express')
 require('dotenv').config()
const app=express()

app.get('/',(req,res)=>{
    res.send("Hello World !")
})
app.get('/twitter',(req,res)=>{
    res.send("TwitterURl")
    
})
app.get('/login',(req,res)=>{
    res.send('<h1>Hello Ankur</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("HEllo welcome to chai and sutta");
})
app.listen(process.env.PORT,()=>{
    console.log(`Port is listing ${process.env.PORT}`)
})