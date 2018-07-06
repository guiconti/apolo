const port = require('../../core/serialPort');

module.exports = (req, res) => {

  let { red, green, blue } = req.body;

  if (!isValidColor(red)) {
    return res.status(400).json({
      msg: 'Invalid red color.'
    });
  }

  if (!isValidColor(green)) {
    return res.status(400).json({
      msg: 'Invalid green color.'
    });
  }

  if (!isValidColor(blue)) {
    return res.status(400).json({
      msg: 'Invalid blue color.'
    });
  }

  port.write(formatColor(red) + formatColor(green) + formatColor(blue), err => {
    if (err)
      return res.status(500).json({
        msg: err
      });
    return res.status(200).json({
      msg: 'Message sent'
    });
  });
};

function isValidColor(color) {
  return color >= 0 && color <= 255;
};

function formatColor(color) {
  let formattedColor = color.toString();
  formattedColor = '0'.repeat(3 - formattedColor.length) + formattedColor;
  return formattedColor;
}
