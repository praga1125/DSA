let express = require('express');
let app = express();
const path = require('path');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/',(req,res) => {
     const publicDirectoryPath = path.join(__dirname, 'index.html');
    res.sendFile(publicDirectoryPath);
    // res.send(obj);
})

app.post('/add', (req, res) => {
    console.log(req.body);
    const response = 'Data received.....'+ JSON.stringify(req.body);
    res.send(response);
})

app.listen(5000, () => {
    console.log('app running..');
});

