let express = require('express');
let app = express();
const path = require('path');
function server(){
    let  obj = {
        "NAME" : document.getElementById('name').value,
        "BOOKING TYPE" : document.getElementById('type').value,
        "JOURNEY FROM" : document.getElementById('from').value,
        "JOURNEY TO" : document.getElementById('to').value,
        "CLASS" : document.getElementById('class').value,
        "JOURNEY DATE" : document.getElementById('date').value
    }
}
app.get('/',(req,res) => {
     const publicDirectoryPath = path.join(__dirname, 'ticket.html');
    res.sendFile(publicDirectoryPath);
    res.send(obj);
})
app.listen(5000, () => {
    console.log('app running..');
});

