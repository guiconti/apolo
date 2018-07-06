const SerialPort = require('serialport');
let port = new SerialPort('/dev/ttyUSB0', {
  baudRate: 9600
});

port.on('open', err => {
  if (err)
    console.log(err);
  console.log('Port opened');

  port.write('test', err => {
    if (err)
      console.log(err);
    console.log('Message sent');
  })
});