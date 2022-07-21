const express=require("express")
const cookieParser = require('cookie-parser')
const cors=require("cors")
const app=express()
const PORT=5000
const { createProxyMiddleware } = require('http-proxy-middleware')
const {userrouter}=require("./routers/userrouter")
app.use(express.json())
app.use(cookieParser())


  app.use(cors({
    orgin:"http://localhost:3000",
    credentials:true,      // laison entre react et le serveur creé
    optionsSuccessStatus:200,
}    
))
app.use('/',userrouter)
app.listen(PORT,()=>{
    console.log(`my server is  http://localhost:${PORT} `)
    })
    // app.use(
    //     '/',
    //     createProxyMiddleware({
    //         target:'http://localhost:3000',
    //         changeOrigin:false
    //     })
    // )
