var https = require('http');
const url = require('url');

https.createServer(function (req, res) {
    let val = url.parse(req.url).query;
    // let data = val.query;
    console.log(val);
    // const response = {
    //     name: 'Vignesh'
    // }
    res.write('val')
  res.end();
}).listen(4000);