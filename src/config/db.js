const pg = require("pg");
const db = new pg.Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
});

module.exports = db;
