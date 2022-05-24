const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({
    id: 1,
    name: "Sir Isaac Newton",
  });
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Shankhadeep</li></ul>");
});

app.post("/", (req, res) => {
  console.log("Updating Messages");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on PORT:${PORT}`);
});
