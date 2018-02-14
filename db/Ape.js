const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Ape = conn.define('ape', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Ape;
