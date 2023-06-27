const port = 8000; // if changed remember to change it in client too
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
