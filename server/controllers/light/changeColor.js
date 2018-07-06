const port = require('../../core/serialPort');

module.exports = (req, res) => {
  port.write('Pexenegue', err => {
    if (err)
      return res.status(500).json({
        msg: err
      });
    return res.status(200).json({
      msg: 'Message sent'
    });
  });
};