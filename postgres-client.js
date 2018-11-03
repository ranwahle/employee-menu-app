const {Pool,Client} = require('pg')

function  getClient() {
    const client = new Client({
        //  user: 'dbUser',
        password: 'mysecretpassword',
        database: 'postgres'
    });
    return client;
}

module.exports = getClient;