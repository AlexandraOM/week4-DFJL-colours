const fs = require("fs");
const path = require("path");
const searchColors = require("./search.js");

const handlerHome = (request, response) => {
  const url = request.url;
  console.log("handlerhome url:", url);
  const filePath = path.join(__dirname, "..", "public", "index.html");

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      respone.end("<h1>Sorry we had a problem on our end</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const handlerPublic = (request, response, url) => {
  const extension = url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/js"
  };

  console.log("handlerpublic url:", url);
  const filePath = path.join(__dirname, "..", url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("<h1>404 not found</h1>");
    } else {
      response.writeHead(200, { "Content-TYpe": extensionType[extension] });
      response.end(file);
    }
  });
};

const handlerSearch = (request, response, url) => {
  const inputText = url.split("=")[1];
  console.log(searchColors);

  response.writeHead(200, { "Content-Type": "application/json" });
  reponse.end(searchColors(inputText));
};

module.exports = {
  handlerHome,
  handlerPublic
};
