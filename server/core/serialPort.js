const SerialPort = require('serialport');
const port = new SerialPort('/dev/ttyUSB0', {
  baudRate: 9600
});

port.on('open', err => {
  if (err)
    console.log(err);
  console.log('Port opened');
});

module.exports = port;