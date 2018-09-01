const port = require('../../core/serialPort');

const stripAmount = 2;
let stripColors = [];

for (let i = 0; i < stripAmount; i++) {
  stripColors[i] = {
    red: 255,
    green: 255,
    blue: 255
  };
}

module.exports = (req, res) => {

  let { strip, red, green, blue } = req.body;

  if (!isValidStrip(strip)) {
    return res.status(400).json({
      msg: 'Invalid strip'
    });
  }

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

  stripColors[strip].red = red;
  stripColors[strip].green = green;
  stripColors[strip].blue = blue

  port.write(formatAnswer, err => {
    if (err)
      return res.status(500).json({
        msg: err
      });
    return res.status(200).json({
      msg: 'Message sent'
    });
  });
};

function isValidStrip(strip) {
  return strip >= 0 && strip <= 1;
}

function isValidColor(color) {
  return color >= 0 && color <= 255;
}

function formatAnswer() {
  let answer = '';
  stripColors.forEach(strip => {
    answer += formatColor(strip.red);
    answer += formatColor(strip.green);
    answer += formatColor(strip.blue);
  });
  return answer;
}

function formatColor(color) {
  let formattedColor = color.toString();
  formattedColor = '0'.repeat(3 - formattedColor.length) + formattedColor;
  return formattedColor;
}
