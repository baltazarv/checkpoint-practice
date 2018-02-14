const port = process.env.PORT || 3000;
const app = require('express')();


const db = require('./db');

db.sync()
  .then(() => db.seed());

app.listen(port, ()=> {
  console.log(`Open http://localhost:${port}`);
});
