const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const cors = require("cors");
var bodyParser = require("body-parser");
const path = require("path");
const config = require("./config");

//Sets our app to use the handlebars engine
app.use(cookieParser("kkaka"));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/app/dist/app"));
const corsOptions = {
  origin: "*",
  methods: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(
  cors({
    origin: ["http://localhost:4200"],
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// parse application/json

const oneHour = 1000 * 60 * 60 * 1;

app.use(
  sessions({
    secret: "thisisforohadmin",
    saveUninitialized: true,
    cookie: { maxAge: oneHour },
    resave: false,
  })
);

app.use(cookieParser());
app.use("/", require("./routes/index"));

app.listen(config.getProperty("server.port"), () =>
  console.log(`Example app listening on port ${config.getProperty("server.port")}!`)
);
