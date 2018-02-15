const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Food = conn.define('food', {
  name: {
    type: Sequelize.STRING
  },
  number: Sequelize.INTEGER
});

module.exports = Food;
