const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3001;

// enabling CORS for all origins
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Change to your MySQL username
  password: "", // Change to your MySQL password
  database: "blog",
});

// connecting to MySQL
db.connect((err) => {
  if (err) {
    console.error("error connecting to database: ", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// getting posts
app.get("/api/posts", (req, res) => {
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      res.status(500).send("Error fetching posts.");
    } else {
      res.json(results);
    }
  });
});

// creating a new post
app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;
  db.query(
    "INSERT INTO posts (title, content) VALUES (?, ?)",
    [title, content],
    (err, result) => {
      if (err) {
        res.status(500).send("Error creating post.");
      } else {
        res.status(201).json({ id: result.insertId, title, content });
      }
    }
  );
});

// starting server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
