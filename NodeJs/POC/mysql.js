

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'nkanamar-ld1',
  user     : 'udqp',
  password : 'password',
  database : 'ump_metadata'
});
connection.connect();
connection.query('SELECT * from employees', function(err, rows, fields) {
  if (!err) {
      var totalNumFields = fields.length;
      var fieldsArray = [];
      for(var i=0;i<fields.length;i++){
          fieldsArray.push(fields[i].name);
      //    console.log(fields[i].name);
      }
      console.log(fieldsArray);
      for (var i = 0; i < rows.length; i++) {
          //console.log(rows[i]);
          for (var j = 0 ; j < fieldsArray.length;j++){
          var curField = fieldsArray[j];
           // console.log(curField+curField.length);
           console.log(rows[i]);
           }

    };
    //console.log('The solution is: ', rows);
  }
  else{
      console.log('Error while performing Query.');
    console.log(err);
  }
    
});

connection.end();
