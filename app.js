var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');
// var middleware = {
//     requireAuthentication: function (req, res, next) {
//         console.log('Private route hit.');
//         next();
//     },
//     logger: function (req, res, next) {
//         var date = new Date().toString();
//         console.log('Request: '+date+' '+req.method+ ' ' +req.originalUrl);
//         next();
//     }
// };

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (request, response) {
    response.send('About us!');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function() {
    console.log('Express server started on port: ' + PORT);
});