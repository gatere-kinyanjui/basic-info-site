const fs = require("fs");

require("dotenv").config();

// import http from "http";

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

// const server = http.createServer((req, res) => {
//   console.log("server running...");

//   // SET HEADER
//   res.setHeader("Content-Type", "text/html");

//   // ROUTING
//   let path = "./views/";

//   switch (req.url) {
//     case "/":
//       path += "/index.html";
//       break;
//     case "/about":
//       path += "/about.html";
//       break;
//     case "/contact-me":
//       path += "/contact-me.html";
//       break;

//     default:
//       path += "404.html";
//       break;
//   }

//   // SEND HTML FILE
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log("an error occurred:", err);
//       res.end();
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });
// });

// s

// if (process.env.NODE_ENV === "prod") {
//   // do production-specific stuff
// }

// // don't want to ruin the surprise by hardcoding the URL!
// // it might even change every few days!
// redirectUserToSuperSecretVideo(process.env.VIDEO_URL);
// function redirectUserToSuperSecretVideo(VIDEO_URL: string | undefined) {
//   throw new Error("Function not implemented.");
// }
