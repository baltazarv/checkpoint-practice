const conn = require('./conn');
// const Sequelize = conn.Sequelize;

const Ape = require('./Ape');
const Food = require('./Food');

const sync = () => conn.sync({ force: true });

const seed = (() => {
  let _snack;
  Food.create({ name: 'grapes', number: 3 })
    .then(_grapes => {
      // console.log(_grapes.get());
      _snack = _grapes;
    })
    .then(() => {
      Promise.all([
        Ape.create({ name: 'Coco', gender: 'male' }),
        Ape.create({ name: 'Pat', gender: 'female' }),
        Ape.create({}),
        Ape.create({ name: '' })
      ])
      .then(([ coco ]) => {
        coco.setSnack(_snack);
      })
    })
});
  // .then(() => {
  //   return Ape.findAll();
  // })
  // .then(apes => {
  //   console.log('# apes', apes.length);
  //   apes.forEach(ape => {
  //     console.log(ape.name);
  //   })
  // })

// Food.belongsTo(Ape, { as: 'monkey' });
Ape.hasMany(Food, { as: 'snack' });

module.exports = {
  sync,
  seed,
  models: {
    Ape,
    Food
  }
};
