const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Man = conn.define('man', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Man;
