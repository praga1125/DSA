let express = require('express');
let app = express();
function register(){
    const obj = {
        "NAME" : document.getElementById('name').value,
        "BOOKING TYPE" : document.getElementById('type').value,
        "JOURNEY FROM" : document.getElementById('from').value,
        "JOURNEY TO" : document.getElementById('to').value,
        "CLASS" : document.getElementById('class').value,
        "JOURNEY DATE" : document.getElementById('date').value
    }
     console.log(obj);
    document.write(JSON.stringify(obj));
}

function test() {
    console.log('TEST');
}