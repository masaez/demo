var http = require('http');
http.createServer(function (req, res) {
    console.log('Llego request de ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hola Code y Azure Web Apps!</h1>');
}).listen(process.env.PORT);
