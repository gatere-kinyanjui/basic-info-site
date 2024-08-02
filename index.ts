import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  console.log("server running...");

  // SET HEADER
  res.setHeader("Content-Type", "text/html");

  // ROUTING
  let path = "./views/";

  switch (req.url) {
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
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(9001, "localhost", () => {
  console.log("Server listening on port 9001....");
});
