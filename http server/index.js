const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {
    if (req.url === "/favicon.ico ") {
        return res.end();
    }

  const log = `${Date.now()}: ${req.url}  ${req.method}new req received\n`;
  const urls = url.parse(req.url,true);
  console.log(urls)
  fs.appendFile("text.txt", log, (err, data) => {
    switch (urls.pathname) {
      case "/":
        const username = urls.query.name
        res.end(`hii ${username}`);
        break;

      case "/contact":
        res.end("my details");
        break;

      case "/search":
        const searchQuery = urls.query.search_query
        res.end(`Here your searched result ${searchQuery}`);
        break;
      case "/signup":
        if(req.method === "GET") res.end(`This is a signup page`);
        else if (req.method === "POST") res.end(`Success`);

        break;
      default:
        res.end("404 not found");
        break;
    }
  });
});

myserver.listen(3000, () => console.log("Server is listening"));