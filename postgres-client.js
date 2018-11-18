const {Pool, Client} = require('pg')

function getClient() {
    const client = new Client({
        user: process.env.dbUser || 'dbUser',
        host: process.env.dbHost ||  'employee-menu-app_db_1',
        password: process.env.pgPassword || 'mysecretpassword',
        database: process.env.pgDatabaseName || 'postgres'
    });
    return client;
}

module.exports = getClient;