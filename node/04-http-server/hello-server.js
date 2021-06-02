const http = require("http");
// console.log(http)

const server = http.createServer(
    (request, response) => {
    response.write("<h1> diego </h1>")
    response.end();
   
})  
server.listen(3000 ,() => console.log("servidor ligado"))