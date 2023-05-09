var router = require("express").Router();
const loginHandler = require("../routes/loginRoute");
// individual products routes
router.get("/", function (req, res, next) {
  res.json({ app: "oh-admin" });
});
router.post("/login", async function (req, res, next) {
  //post validations or AJV here
  // console.log(req.session.destroy());
  // return;
  if (!req.session.user) {
    let response = await loginHandler.postHandler(req.body);
    if (response.length > 0) {
      req.session.user = response[0];
      res.send(response[0]);
    }
  } else {
    res.send(req.session.user);
  }
});

module.exports = router;
