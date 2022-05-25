require("dotenv").config();
const express = require("express");
const db = require("./db/conn");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000

app.use(express.static("public"));

app.post("/api/reports", async (req , res) => {
  try {
    const data = await db.query('INSERT INTO submitter (name, email) VALUES ($1, $2) RETURNING *;', [req.body.name, req.body.email])
    res.json(data.rows);
    //console.log(data.rows)
  } catch (error) {
    // res.send("some error")
    console.log(error)
  }
  
});

app.get("/api/reports", async (_ , res) => {
  try {
    const data = await db.query("SELECT * FROM submitter")
    res.json(data.rows);
  } catch (error) {
    res.send("some error")
  }
});

app.delete('/api/reports/:id', async (req, res) => {
  try {
     const data = await db.query('DELETE FROM submitter WHERE id=$1;', [req.params.id]);
          res.json(data.rows);
      }
      catch (error) {
      res.json(error);
  }
})

app.listen(PORT, () => { //process.env.PORT 3000
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