const port = process.env.PORT || 3000;
const app = require('express')();
const router = require('./routes');

const db = require('./db');

db.sync()
  .then(() => db.seed());

app.use(require('method-override')('_method'));

app.use('/', router);

app.use((err, req, res, next) => {
  res.send(err.message);
});

app.listen(port, ()=> {
  console.log(`Open http://localhost:${port}`);
});
