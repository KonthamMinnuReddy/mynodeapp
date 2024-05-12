const express=require('express')
const app=express()
const PORT =5000
//use(route,function)
app.get('/',(req,res)=>{
  return res.send("hello world")
})
app.get('/newapp',(req,res)=>{
    return res.send('i have created new app')
})
//listen(port,function)
//function returns server start or fail
app.listen(PORT,()=>{
    console.log("server is running on port"+PORT)
})