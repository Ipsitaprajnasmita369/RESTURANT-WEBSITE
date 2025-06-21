const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/reserve', (req, res) => {
  const reservation = req.body;
  const data = `Name: ${reservation.name}, Date: ${reservation.date}, Time: ${reservation.time}, Guests: ${reservation.guests}\n`;
  fs.appendFileSync('reservations.txt', data);
  res.send('Reservation received! Thank you.');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});