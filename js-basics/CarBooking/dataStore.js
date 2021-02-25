const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'praga',
  password : 'vikipraga1125'
});

const initialize = () => {
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('Database connected...');
    connection.query('USE BookingDB', (error, results) => {
      if (error) throw error;
      console.log('Booking Db attached...');
    });
  });
}
 const addBookings = ({name, carType, fromAddress, toAddress,  DateOfBooking}) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO bookings VALUES("${name}","${carType}","${fromAddress}","${toAddress}",'${DateOfBooking}');`
        connection.query(query, (err) => {
          if(err) reject('duplicate entry..');
          console.log('travel Booked..........');
          resolve('travel Booked..');
        });
    });
 }
const cancelBooking = (name) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM bookings WHERE name = "${name}";`
        connection.query(query, (err) => {
          if(err) reject("No Booked By User.......");
          resolve('Booking Canceled.....');
        });
    });
}




 module.exports = {
    initialize,
    addBookings,
    cancelBooking
 };

