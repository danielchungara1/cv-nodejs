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
    }else if(req.url=="/public/css/estilos-index.css"){
        modulefs.readFile("public/css/estilos-index.css",function(err, data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/css'});
            res.write(data);
            return res.end();
        })
    }else if(req.url=="/public/img/banner/cv-lupa.jpg"){
        modulefs.readFile("public/img/banner/cv-lupa.jpg",function(err, data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/image/jpg'});
            res.write(data);
            return res.end();
        })
    }else if(req.url=="/favicon.ico"){
        modulefs.readFile("public/img/logo.ico",function(err, data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'image/ico'});
            res.write(data);
            return res.end();
        })
    }        
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end("RECURSO NO ENCONTRADO: " + req.url);
        console.log("RECURSO NO ENCONTRADO" + req.url);
    }      
}).listen(port);
