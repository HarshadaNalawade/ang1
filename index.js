var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');//use this for cross origin request
var app = express();
app.use(cors());


//load customers route
var connection  = require('express-myconnection'); 

app.use(connection(mysql,{
        
        host: 'localhost',
        user: 'root',
        password : 'root',
        port : 3306, //port mysql
        database:'books'
    },'request')
);//route index, hello world


app.listen(3000, function() {
  console.log('listening on 3000')
})

//Get all records
app.get('/books', function(req, res) {
  req.getConnection(function(err,connection){
     connection.query('SELECT * FROM books','',function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
            else
              res.jsonp(rows);
         });
    }); 
})

//get one record
app.get('/books/edit/:id', function(req, res) {
  var book_id = req.params.id;
  req.getConnection(function(err,connection){
      connection.query('SELECT * FROM books where book_id=?',[book_id],function(err,row)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
            else
              console.log(row);
              res.jsonp(row);
         });
    }); 
})

//edit one record
app.post('/books/:id', function(req, res) {
  var book_id = req.params.id;
  var title = req.params.title;
  var author = req.params.author;
  console.log(req.params);
  console.log(title);
  console.log(author);
  req.getConnection(function(err,connection){
      connection.query('UPDATE books set title=?, author=? where book_id=?',[title,author,book_id],function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
            else
              return res.jsonp(rows);
         });
    }); 
    
})

//delete one record
app.delete('/books/:id', function(req, res) {
  var book_id = req.params.id;
  req.getConnection(function(err,connection){
      connection.query('DELETE FROM books where book_id=?',[book_id],function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
        });
    }); 
})


