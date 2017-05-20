var express = require('express');
var app = express();

var cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/public" + "index.htm" );
})

app.get('/login', function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.query.name,
      password:req.query.password
   };
   console.log(response);
   console.log("Cookies: ", req.cookies)
   res.end(JSON.stringify(response));
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})