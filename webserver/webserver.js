var modulehttp = require('http');
var modulefs = require ('fs');

//Helpers
var port = process.env.PORT || 5000;
console.log('port available to listen ' + port);

modulehttp.createServer(function(req, res){
    if(req.url=="/" || req.url=="/index.html") {   
        modulefs.readFile("public/index.html",function(err, data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })        
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end("RECURSO NO ENCONTRADO");
    }      
}).listen(port);
