// server/db/pool.js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: '172.31.21.69',
    database: 'minibar',
    password: '16474264',
    port: 5432,
});

module.exports = pool;
