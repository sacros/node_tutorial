var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res){
    var path = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    console.log(path);
    console.log(params);
    console.log(req);
    console.log(url.parse(req.url).query);
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(path == '/')
        res.write("<p>You're @home!</p>");
    else if(path == '/blockchain')
        res.write("<p>You're @blockchain!</p>");
    else if(path == '/react')
        res.write("<p>You're @react!</p>");
    else{
        res.writeHead(404);
        res.write("<p>Sorry, this page does't exist!</p>");
    }
    if('firstName' in params && 'lastName' in params){
        res.write("Your Name is: "+params['firstName']+" "+params['lastName']);
    }
    res.end();
});
server.listen(8002);