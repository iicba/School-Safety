require("dotenv").config();
const express = require("express");
const db = require("./Back End/db/conn");
const app = express();

app.use(express.static("Front End"));

app.post("/api/reports")

app.get("/api/reports", (_ , res) => {
  try {
    db.query("SELECT * FROM plates").then((data) => {
      res.json(data.rows);
    });
  } catch (error) {
    res.send("some error")
  }
  
});

app.listen(3000, () => { //process.env.PORT
  console.log(`listening on Port ${3000}`);
});

// require("dotenv").config(); // TODO: ADD THIS LINE
// const express = require("express");
// const app = express();
// const db= require("./db/conn.js");

// app.get("api/students", (req, res) => {
//   db.query("SELECT * FROM student", (err, data) => {
//     res.json(data.rows);
//   });
// });

// // TODO: Replace 3000 with process.env.PORT
// app.listen(process.env.PORT, () => {
//   console.log("listening on Port 3000");
// });