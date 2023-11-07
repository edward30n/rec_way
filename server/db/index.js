const { Pool } = require("pg");
const pool = new Pool({
    user: process.env.pguser,
    host: process.env.pghost,
    database: process.env.pgdatabase,
    password: process.env.pgpassword,
    port: process.env.pgport,

});

module.exports = {
  query: (text, params) => pool.query(text, params),
};