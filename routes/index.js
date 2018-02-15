const router = require('express').Router();
const db = require('../db');
const { Ape, Food } = db.models;

router.get('/females', (req, res, next) => {
  Ape.findAll({
    where: { gender: 'female' },
    include: [{ model: Food, as: 'snack' }]
  })
  .then(apes => {
    if (apes.length === 0) res.sendStatus(404);
    res.send(apes);
  })
  .catch(next);
});

router.get('/', (req, res, next) => {
  Ape.findAll({
    include: [
      { model: Food, as: 'snack' }
    ]
  })
  .then(apes => {
    // console.log(apes);
    res.status(201).send(apes);
  })
  .catch(next);
});

router.get('/rename/:oldname/:newname', (req, res, next) => {
  Ape.findOne({ where: { name: req.params.oldname }})
  .then(ape => {
    // ape.name = req.params.newname;
    Object.assign(ape, { name: req.params.newname, gender: ape.gender });
    return ape.save();
  })
  .then(ape => {
    res.redirect('/');
  });
});

router.get('/birth/:name', (req, res, next) => {
  Ape.create({ name: req.params.name})
  .then(() => {
    res.status(201).redirect('/');
  })
  .catch(next);
});

router.get('/kill/:id', (req, res, next) => {
  Ape.findById(req.params.id)
  .then(ape => {
    ape.destroy()
  })
  .then(() => {
    res.redirect('/');
  })
  .catch(next);
});

module.exports = router;
