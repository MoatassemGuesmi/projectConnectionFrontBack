const mysql = require("mysql2")
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'guesmi',
    password:"11352209",
    insecureAuth:true
    }
)
connection.connect((err)=>{
    err?console.log(err):console.log("database connected!")
})
module.exports={connection}