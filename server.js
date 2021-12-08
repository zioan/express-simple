const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
// app.use(logger);

app.use(express.static("./public"));
const path = require("path");

//Access data from forms
app.use(express.urlencoded({ extended: true }));

//same as urlencoded but allow to parce json from the body
app.use(express.json);

app.get("/", (req, res) => {
  // res.sendStatus(500);
  // res.json({ message: "hi" });
  // res.download("server.js");
  // res.status(500).send("Hello World!");
  // res.render("index");
  res.render("index", { text: "World" });
});

app.get("/contact", logger, (req, res) => {
  res.sendFile(path.resolve(__dirname, "./contact.html"));
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
