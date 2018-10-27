var modulehttp = require('http');
var modulefs = require ('fs');

//Helpers
var port = process.env.PORT || 5000;


modulehttp.createServer(function(req, res){
    if(req.url=="/" || req.url=="/index.html") {   
        modulefs.readFile("public/html/index.html",function(err, data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })        
    }
    else if(req.url=="/favicon.ico"){
        modulefs.readFile("public/img/logo.ico",function(err, data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'image/ico'});
            res.write(data);
            return res.end();
        })
    }        
    else{
        let patharchivo = req.url.slice(1);                
        modulefs.readFile(patharchivo, function(err, data){
            if (err){
                res.writeHead(400);
                return res.end("RECURSO NO ENCONTRADO");
            };            
            res.writeHead(200);
            res.write(data);
            return res.end();
        })
    }
    
}).listen(port, function(){
    console.log('server listening port ' + port);
});
