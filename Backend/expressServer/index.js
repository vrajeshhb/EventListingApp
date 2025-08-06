const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

// MySQL connection
/*
//   host: "", // or your DB host
//   user: "", // your DB user
//   password: "", // your DB password
//   database: "", // replace with your database name
*/
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "4174633_rdb",
});

// Connect to DB
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Routes
app.get("/events", (req, res) => {
  db.query("SELECT * FROM events", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch data" });
    } else {
      res.json(results);
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
