const { error } = require("console");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("route");
  next();
});

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});
app.use((req, res, next) => {
  console.log("Profile ");
  next();
});

app.get("/profile", (req, res) => {
  res.send("hello from profile server :)");
});
app.get("/about", (req, res,next ) => {
   return next(new Error("crash hogaya"))
  });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something went wrong");
});

app.listen(3000);
