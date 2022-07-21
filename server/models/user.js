const {connection}=require("../database/config")
module.exports={
    getOneuser:((req,res)=>{
     const query="select * from mylist"
     connection.query(query,(err,results)=>{
        err?res.status(500).send(err):res.status(200).send(results)
     })
    })
}    