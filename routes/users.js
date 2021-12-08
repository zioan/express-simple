const express = require("express");
const router = express.Router();

router.use(logger2);

//    /users
router.get("/", (req, res) => {
  res.send("User list");
});

//    /users/new
router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Test" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  });

const users = [{ name: "John" }, { name: "Mark" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger2(req, res, next) {
  console.log(req.originalUrl);
  next();
}

/*
//  /users/125
router.get("/:id", (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`Update user with ID ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete user with ID ${req.params.id}`);
});
*/
module.exports = router;
