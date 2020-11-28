const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10, // heroku JawsDB connection limit
    host: 'r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'hs7fn5zvuyfj0u9n',
    password: 'e92lz98lgww45ogn',
    database: 'l0ifn23srsrdfe2i'
});

module.exports = pool;
