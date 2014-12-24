var express         = require('express');
var app             = express();

var instagame       = require('./instagame');

var filesDir = __dirname + '/app';
var serverPort = process.env.PORT || 3000;


function sendJson(res) {
    return function(error, result) {
        if (error) {
            code = error.httpCode || 500;
            res.json(code, error);
            res.send(); // send the response
        } else {
            res.json(200, result);    
        }
    }
}



app.configure(function() {
    app.use(express.basicAuth('ihan', 'sama'));

    app.use(express.static(filesDir));


    app.get('/api/instagameFeed', function(req, res) {
        instagame.latestPictures(sendJson(res));
    });
});

console.log('### Talviolympicks Backend started!');
console.log('Serving static resources from', filesDir);

app.listen(serverPort);
