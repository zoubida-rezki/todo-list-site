//conecting to our database
const {Pool} = require('pg'); // to conect databases to servers

const pool = new Pool({
    user:"postgres",
    password:'z',
    host:'localhost',
    port:5432,
    database:'todo'
});

module.exports = pool;


// const Pool = require('pg').Pool; // to conect databases to servers

// const pool = new Pool({
//     user:"postgres",
//     password:'z',
//     host:'localhost',
//     port:5432,
//     database:'todo'
// });

// module.exports = Pool;