let http = require('http')
let fs = require('fs');
const { json } = require('body-parser');
http.createServer(function(req,res){
    fs.readFile('users.txt', (err,data) =>{
        console.log(err);
        res.write(data);
        res.end();
    });
    fs.appendFile('file1.txt', 'hello world', function (err,data) {
        console.log(data);
      });
    fs.appendFile('users.txt', `5,bommi,dog,007`, function(err,data){
        console.log(err);
        console.log(data);
    });
    // fs.writeFile('users.txt', `5,bommi,dog,007`, function(err,data){
    //     console.log(err);
    //     console.log(data);
    // });
}).listen(3000);
