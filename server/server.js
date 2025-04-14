const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const md5 = require("md5");
const app = express();
app.use(cors());

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "2progr2_users",
});
conn.connect((err) => {
  if (err) {
    console.log("Błąd w połączeniu z bazą");
  } else {
    console.log("Połączenie udane");
  }
});
app.get("/login/:login/:password", (req, res) => {
  let login = req.params.login;
  let password = md5(req.params.password);

  console.log(login);
  console.log(password);
  const sql = `SELECT * FROM users WHERE login='${login}' AND password='${password}'`;

  conn.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    if (result.length > 0) {
      res.json({ status: "ok",user: result[0] });
    } else {
      res.json({ status: "error" });
    }
  });
});
app.get("/register/:login/:password", (req, res) => {
  let login = req.params.login;
  let password = md5(req.params.password);

  const sql = `INSERT INTO users(login,password,uprawnienia) VALUES ('${login}','${password}','user')`;
  const sql2 = `SELECT login FROM users WHERE login = '${login}'`;

  conn.query(sql2, (err, result) => {
    console.log(result);
    if (result.length > 0) {
      res.status(409).json({ message: "login jest zajęty" });
    } else {
      conn.query(sql, (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
          res.json({ status: "ok" });
        } else {
          res.json({ status: "error" });
        }
      });
    }
  });
});

app.listen(3000, () => {
  console.log("ok");
});
