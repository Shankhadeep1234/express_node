const express = require("express");

const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(
    `Method:${req.method} URL:${req.url} ${delta}ms took to complete the resquest`
  );
});

app.use(express.json());

app.post("/friends", friendsController.postFriend);
app.get("/friends", friendsController.getFriends);
app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on PORT:${PORT}`);
});
