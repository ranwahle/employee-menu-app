const {Pool,Client} = require('pg')

function  getClient() {
    const client = new Client({
        //  user: 'dbUser',
        password: process.env.pgPassword ||  'mysecretpassword',
        database: process.env.pgDatabaseName || 'postgres'
    });
    return client;
}

module.exports = getClient;