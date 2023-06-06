var router = require("express").Router();
const loginHandler = require("../routes/loginRoute");
const data = require("../constants/data");
const config = require("../config");
const notificationAccessor = require("../accessors/notification-accessor");
const randomstring = require("randomstring");
const Ajv = require("ajv");
const allSchemas = require("../schemas/schema");
const addFormats = require("ajv-formats");

const ajv = new Ajv();
addFormats(ajv);

// individual routes
router.get("/", function (req, res, next) {
  res.json({ app: "oh-admin" });
});

router.get("/login", async function (req, res, next) {
  if (req.session.user) {
    res.send({ user: req.session.user, status: 200 });
  } else {
    res.send({ user: null, status: 400 });
  }
});

router.get("/logout", async function (req, res, next) {
  req.session.destroy();
  res.send(null);
});

router.post("/delete/notification", async function (req, res, next) {
  if (
    req.session.user &&
    req.session.user.role === "admin" &&
    config.getProperty("oh.internal.adminsIds").includes(req.session.user.loginid)
  ) {
    let response = notificationAccessor.deleteNotifications(req.body.data, req.session.user);
    res.send(response);
  } else {
    res.sendStatus(400);
  }
});

router.post("/login", async function (req, res, next) {
  const validate = ajv.compile(allSchemas.loginSchema);
  const valid = validate(req.body);
  if (valid) {
    let response = await loginHandler.postHandler(req.body);
    if (response.length > 0) {
      req.session.user = response[0];
      res.send(response[0]);
    } else {
      res.send({ status: 404 });
    }
  } else {
    res.send({ status: 400 });
  }
});

router.get("/getUserInfo", async function (req, res, next) {
  if (req.session.user) {
    let response = { user: req.session.user };
    if (
      req.session.user.role === "admin" &&
      config.getProperty("oh.internal.adminsIds").includes(req.session.user.loginid)
    ) {
      response.data = data;
      response.ohInternalAdminsEnable = config.getProperty("oh.internal.admins.enable");
      response.maxNotifications = config.getProperty("oh.max.notifications");
    }
    res.send(response);
  } else {
    res.send(null);
  }
});

router.post("/getNotificationsForUser", async function (req, res, next) {
  if (req.session.user) {
    let filteredData = await notificationAccessor.getNotificationsForUser(req.session.user);
    res.send({ data: filteredData, user: req.session.user, status: 200 });
  } else {
    res.send({ status: 400 });
  }
});

router.get("/getNotificationdata", async function (req, res, next) {
  if (req.session.user) {
    let response = { user: req.session.user };
    if (req.session.user.role === "admin") {
      response.data = data;
      response.maxNotifications = config.getProperty("oh.max.notifications");
      res.send(response);
    }
  } else {
    res.send(null);
  }
});

router.get("/deleteExpiredNotifications", async function (req, res, next) {
  notificationAccessor.deleteExpiredNotifications();
});

router.post("/saveNotifications", async function (req, res, next) {
  if (
    req.session.user &&
    req.session.user.role === "admin" &&
    config.getProperty("oh.internal.adminsIds").includes(req.session.user.loginid)
  ) {
    const validate = ajv.compile(allSchemas.messageSchema);

    const valid = validate(req.body.data);
    if (valid) {
      let response = notificationAccessor.saveNotifications(req.body.data, req.session.user);
      res.send(response);
    } else {
      res.send({ data: data, status: 403 });
    }
  } else {
    res.send({ status: 400 });
  }
});

module.exports = router;
