var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database name
  user     : 'root', //mysql database username
  password : '', //mysql database password
  database : 'dummy_db' //mysql database name
});

// connection.connect();

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

// var http = require('http');
//
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end('Connected to: mysql-nodejs-integration project\n');
// }).listen(6000);
//
// console.log('Server started');

// CREATE TABLE IF NOT EXISTS `employee` (
// `id` int(11) NOT NULL COMMENT 'primary key',
//   `employee_name` varchar(255) NOT NULL COMMENT 'employee name',
//   `employee_salary` double NOT NULL COMMENT 'employee salary',
//   `employee_age` int(11) NOT NULL COMMENT 'employee age'
// ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1 COMMENT='datatable demo table';
