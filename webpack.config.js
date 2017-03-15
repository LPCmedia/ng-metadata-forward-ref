var cfg = '';

switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    cfg = require('./config/webpack.dev');
    break;
  case 'dev':
  case 'development':
  default:
    cfg = require('./config/webpack.dev');
}
module.exports = cfg;
