const http = require("http");

const server = http.createServer(
    (request , response ) => {
        request.url; // tnho stringo da url da requesicção
         response.writeHead(200, {'Content-Type':'text/html'})// retorna no cabeçalho 
        response.write('<head><meta charset="UTF-8"></head>') 
            if(request.url === "/"){
                response.write('<h1>Página principal</h1>' )
                response.write('<ul>')
                response.write('<li> <a href="/" /> Home</li>')
                response.write('<li> <a href="/artigos" /> artigos</li>')
                response.write('<li> <a href="/contatos/dias" /> contato</li>')
                response.write('</ul>')
            }else if (request.url === "/artigos"){
                response.write('<h1>artigo</h1>' )
                response.write('<ul>')
                response.write('<li> <a href="/" /> Home</li>')
                response.write('<li> <a href="/artigos" /> artigos</li>')
                response.write('<li> <a href="/contatos/dias" /> contato</li>')
                response.write('</ul>')
                response.write('<h1> muito valor na amisade </h1>')
                response.write('<h1> Meu projeto sera em feito  </h1>')
                response.write('<h1> casa da mamae e melhor lugar</h1>')
                response.write('<h1> muito valor na amisade </h1>')
            } else if (request.url === "/contatos/dias") {
                response.write('<h1>artigo</h1>' )
                response.write('<ul>')
                response.write('<li> <a href="/" /> Home</li>')
                response.write('<li> <a href="/artigos" /> artigos</li>')
                response.write('<li> <a href="/contatos/dias" /> contato</li>')
                response.write('</ul>')
                response.write('<h1> muito valor na amisade </h1>')
                response.write('<h1> Meu projeto sera em feito  </h1>')
                response.write('<h1> casa da mamae e melhor lugar</h1>')
                response.write('<h1> muito valor na amisade </h1>')
            }
            response.end()

} )

server.listen(3000, ( ) => console.log("servidor porta 300"))