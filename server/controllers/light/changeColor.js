/**
 * Module to add a game
 * @module controllers/games/newGame
 */
const database = require('../../models/database');
const logger = require('../../../tools/logger');
const validator = require('../../utils/validator');
const constants = require('../../utils/constants');
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