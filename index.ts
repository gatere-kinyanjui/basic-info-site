const fs = require("fs");

require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 9002;

app.get("/", (request, response) => {
  response.send("Hello basic site from ExpressJS!");

  // SET HEADER
  response.setHeader("Content-Type", "text/html");

  // ROUTING
  let path = "./views/";

  switch (request.url) {
    case "/":
      path += "/index.html";
      break;
    case "/about":
      path += "/about.html";
      break;
    case "/contact-me":
      path += "/contact-me.html";
      break;

    default:
      path += "404.html";
      break;
  }

  // SEND HTML FILE
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("an error occurred:", err);
      response.end();
    } else {
      response.write(data);
      response.end();
    }
  });
});

app.listen(PORT, () => {
  console.log(`Basic site with ExpressJS listening on port ${PORT}!`);
});
