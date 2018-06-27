<<<<<<< HEAD
const bunyan = require('bunyan');
const config = require('./config');

const logConfig = Object.assign(
  {
    name: 'VCase',
    level: 'info',
  },
  config.log
);

module.exports = bunyan.createLogger(logConfig);
=======
const bunyan = require('bunyan');
const config = require('./config');

const logConfig = Object.assign(
  {
    name: 'VCase',
    level: 'info',
  },
  config.log
);

module.exports = bunyan.createLogger(logConfig);
>>>>>>> 0a276c0d594bd0ccc1910be31f0fc259c6319449
