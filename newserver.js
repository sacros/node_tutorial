var http = require('http');
var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();

var server = http.createServer();
server.on('request', function(){
    console.log('Server started');
})
server.on('request', function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<p>Yolo, bruv!</p>");
    console.log('data sent!');
});
server.on('close', function(){
    console.log('Goodbye');
})
game.on('newplayer', function(name, lives){
    console.log('New player, '+name+': '+lives);
})
game.on('gameover', function(message){
    console.log(message);
})
game.emit('newplayer', 'Mario', 3);
game.emit('gameover', 'You lose!');
server.listen(8004);
//server.close();