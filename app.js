//Set up code
//----------------------------------------------
const express = require("express");
const hbs = require("hbs");

const app = express();
app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");

//routes
//----------------------------------------------

app.get("/", (request, response, next) => {
  response.render("home-page.hbs");
});

app.get("/locations", (request, response, next) => {
  response.render("locations.hbs");
});

app.get("/events", (request, response, next) => {
  response.render("events.hbs");
});

app.get("/about", (request, response, next) => {
  response.render("about.hbs");
});

app.get("/advice", (request, response, next) => {
  response.render("advice.hbs");
});

app.get("/create", (request, response, next) => {
  response.render("create-account.hbs");
});

app.listen(4000, () => {
  console.log("Congrats, it works!");
});
