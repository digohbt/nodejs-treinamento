const http = require("http");
const fs = require('fs') 


const server = http.createServer( 
    (request , response ) => {
        
        let caminho_arquino = ""
        if(request.url === "/"){
                caminho_arquino = "index.html";
        }else {
             caminho_arquino = `${request.url.substr(1)}.html`
            //  console.log("===",caminho_arquino.substr(0))
        }
        // }else if (request.url === "/carrinho"){
        //         caminho_arquino = "carrinho.html";

        // }else if (request.url === "/produtos"){
        //         caminho_arquino = "produtos.html";
        // }
    
       console.log(caminho_arquino)
       if(fs.existsSync(caminho_arquino)){
            fs.readFile(caminho_arquino , 
                (erro , dados)=> {
                    if(erro){
                        console.log("===erro======");
                    }
                    response.writeHead(200, {'Content-Type': 'Text/html'});
                    response.end(dados)
        })
       }else {
        response.writeHead(404, {'Content-Type': 'Text/html'});
        response.write("Pagina nao encontrada");
        response.end();
    }
    
});



server.listen(3000, () => console.log("Servidor porta 3000"))