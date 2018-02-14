const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Ape = require('./Ape');
const Man = require('./Man');

const sync = () => conn.sync({ force: true });

const seed = () => {
  return Promise.all([
    Ape.create({ name: 'Coco' }),
    Ape.create({ name: 'Will' })
  ])
  .then(() => {
    return Ape.findAll();
  })
  .then(apes => {
    console.log('# apes', apes.length);
    apes.forEach(ape => {
      console.log(ape.name);
    })
  })
};

module.exports = {
  sync,
  seed,
  models: {
    Ape,
    Man
  }
}
