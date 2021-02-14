const {
    initialize,
    addBookings,
    cancelBooking
  } = require('./dataStore');

const express = require('express');
const app = express();
const path = require('path');

initialize();

app.use(express.urlencoded());
app.use(express.json());

app.get('/',(req,res) => {
  const publicDirectoryPath = path.join(__dirname, 'booking.html');
 res.sendFile(publicDirectoryPath);
 // res.send(obj);
});

app.post('/Booking',(req,res) => {
  const payload = {
    name : req.body.name,
    carType : req.body.carType,
    fromAddress : req.body.fromAddress,
    toAddress : req.body.toAddress,
    DateOfBooking : req.body.DateOfBooking
  }
  console.log(payload);
  addBookings(payload).then((result) => {
    res.send(result)
  }).catch((err) => {
    res.send(err);
  });
});

app.put('/Cancel',(req, res) => {
  const name = req.body.name;
  cancelBooking(name).then((result) => {
    console.log(result);
    res.send(result);
  }).catch((err) => {
    res.send(err);
  })
});


app.listen(4000, () => {
  console.log('App running on 4000..');
});