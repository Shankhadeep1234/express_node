const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(
    `Method:${req.method} 
URL:${req.baseUrl}${req.url}
took ${delta}ms to complete the request`
  );
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Friends Are VERY Clever",
    caption: "Let's go skiing!",
  });
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on PORT:${PORT}`);
});
