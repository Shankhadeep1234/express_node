const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friends!",
    friend: "Elon Musk",
  });
  //   res.sendFile(
  //     path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  //   );
  //res.send("<h4>Shankhadeep Bhadra</h4>");
}

function postMessage(req, res) {
  console.log("Updating Messages");
}

module.exports = {
  getMessages,
  postMessage,
};
