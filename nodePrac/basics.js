const http = require("http");
const fs = require("fs");

// only on hitting url callback will be executed
let server = http.createServer((req, res) => {
  console.log(
    req.url,
    req.headers,
    req.method,
    " <-- Req Process --> ",
    process
  );
  // this callback is un-ending process here because
  // we always need server running
  // we can quit this "EVENT LOOP" using inbuilt process object
  // it hard exits our event loop
  //   process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");

  // Redirect
  res.statusCode = 302;
  res.setHeader("location", "/");

  // end
  res.end();
});

/* ****************************** Main Code ************************************ */

server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  //   console.log({ url, method });
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      //   console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log({ message });
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, "127.0.0.1", () => {
  console.log(`Server running at 3000`);
});

// Blocking Code
fs.writeFileSync("op.txt", "tp");
// and
//  Nonblocking Code

server.listen(5555);
