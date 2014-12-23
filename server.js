var express        = require('express');
var app            = express();

var filesDir = __dirname + '/app';
var serverPort = process.env.PORT || 3000;

app.configure(function() {
    app.use(express.basicAuth('ihan', 'sama'));
	
    app.use(express.static(filesDir));
});

console.log('### Talvilympicks Backend started!');
console.log('Serving static resources from', filesDir);

app.listen(serverPort);
