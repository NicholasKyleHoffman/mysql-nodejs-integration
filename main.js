var mysql = require('mysql');
var conn = mysql.createConnection({
  host      : 'localhost',  // mysql db name
  user      : 'root',       // mysql db username
  password  : '',           // mysql db password
  database  : 'dummy_db'    // myql db name
})

conn.connect();

conn.connect(function(err) {
  if (err) throw error
  console.log("You are now connected!!!!....")
});
