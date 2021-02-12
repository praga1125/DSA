var express = require('express');
var fs = require('fs');
var cors = require('cors');
const app = express();
const path = require('path');

// // get, post, put, delete
// app.use(cors())

// const users = [
//     { id: 1, name: 'js' },
//     { id: 2, name: 'ruby' },
//     { id: 3, name: 'python' },
//     { id: 4, name: 'perl' },
//     { id: 5, name: 'java' },
// ]

// const findUser = (id) => {
//     let name = null;
//     for(let i=0; i< users.length; i++) {
//         const user = users[i];  //  { id: 1, name: 'js' }
//         if(user.id == id) {
//             name = user.name;
//         }
//     }
//     return name;
// }

// app.get('/', (req, res) => {
//     // console.log(req.query.id);
//     const id = req.query.id;
//     const user = findUser(id);
//     res.statusCode = 200;
//     res.send(user);
// })

// app.get('/user', (req, res) => {
//     const publicDirectoryPath = path.join(__dirname, '/../railwayBookingForm/ticket.html');

//     console.log(publicDirectoryPath);
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.send({
//         name: 'Vignesh',
//         dept: 'IT'
//     })
//     // res.sendFile(publicDirectoryPath, (res) => {
//     //     console.log(res);
//     // })
// })

// app.listen(3000, () => {
//  console.log('App running in port 3000...');   
// });

fs.readFile('./users.txt', (err, val) => {
    let fileContent = val+'';
    const userOne = fileContent.split('\n')[1]
    console.log(userOne.split(','));
})