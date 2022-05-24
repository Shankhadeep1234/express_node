const express = require("express");

const app = express();

const friends = [
  {
    id: 0,
    name: "Albert Einstein",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(
    `Method:${req.method} URL:${req.url} ${delta}ms took to complete the resquest`
  );
});

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend doesn't exist",
    });
  }
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
