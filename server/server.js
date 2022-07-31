const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("Attendance system application is running now!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
