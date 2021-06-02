const http = require("http");
const fs = require ("fs")

const server = http.createServer(
    (request , response ) => {
        request.url; // tnho stringo da url da requesicção
         response.writeHead(200, {'Content-Type':'text/html'})// retorna no cabeçalho
            if(request.url === "/"){
            
            }else if (request.url === "/artigos"){
               
            } else if (request.url === "/contatos") {
            
            }
            response.end()

} )

server.listen(3000, ( ) => console.log("servidor porta 300"))