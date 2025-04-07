const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());


var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"2progr2_users"
 })
 conn.connect((err)=>{
    if(err){
        console.log("Błąd w połączeniu z bazą");
    }
    else {
        console.log("Połączenie udane");
    }
 })
app.get('/login/:login/:password',(req,res)=>{
 let login = req.params.login;
 let password = req.params.password;
 
 console.log(login);
 console.log(password);
 const sql = `INSERT INTO users(login, password, uprawnienia) VALUES (${login},${password},admin)`;
    
 conn.query(sql, (err, dane, info) => {
    if(err){
        console.log("Nie udało się wstawic rekordu");

    }
    else{
        console.log("wstawiono rekord");
    }
 })

})




app.listen(3000,()=>{
    console.log("ok");
})