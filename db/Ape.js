const conn = require('./conn');
const Sequelize = conn.Sequelize;

var monkeySuffix = '';

const Ape = conn.define('ape', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  gender: Sequelize.ENUM('female', 'male', 'nonbinary')
}, {
  hooks: {
    beforeValidate: function(item) {
      if (!item.name) {
        item.name = 'Monkey' + monkeySuffix;
        monkeySuffix = monkeySuffix + ' Jr.';
      }
    }
  }
});

module.exports = Ape;
