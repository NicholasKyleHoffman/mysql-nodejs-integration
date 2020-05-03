var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Connected to: mysql-nodejs-integration project\n');
}).listen(6000);

console.log('Server started');


var mysql = require('mysql');
var conn = mysql.createConnection({
  host      : 'localhost',  // mysql db name
  user      : 'root',       // mysql db username
  password  : '',           // mysql db password
  database  : 'test_db'    // myql db name
})

conn.connect();

conn.connect(function(err) {
  if (err) throw error
  console.log("You are now connected!!!!....")
});
