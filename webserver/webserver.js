var modulehttp = require('http');

//Helpers
var port = process.env.PORT || 5000;
console.log('port available to listen ' + port);

modulehttp.createServer(function(req, res){
    if(req.url=="/" || req.url=="/index.html") {   
        return res.end("deberia devolver el index.html")
    }else{
        return res.end("404")
    }      
}).listen(port);
