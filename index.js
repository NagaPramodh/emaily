const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./services/passport");
const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
const bodyParser = require("body-parser");
// const bodyParser = require("body-parser");
// app.get("/", (req, res) => {
//   res.send({ hi: "This is pramodh" });
// });

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);
//Client Id: 945078027571-7q5s9ajjc5h5kfktre02hl6l1lolfmpq.apps.googleusercontent.com
//Client Secret : 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

mongoose.connect(keys.mongoURI);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
