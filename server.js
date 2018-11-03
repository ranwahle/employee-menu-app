'use strict';

const express = require('express');

const client = require('./employee-db-client');

const authMiddleware = require('./athentication-middleware')

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/api/employees/', authMiddleware,  (req, res) => {
        client.getEmployees().then(result => res.end(JSON.stringify(result)))
    }
)

app.get('/api/employee/:id', authMiddleware, (req, res) => {
    res.end(JSON.stringify({}))
})

app.post('/api/employee', authMiddleware, (req, res) => {
    client.addEmployee(req.body);
    res.end(JSON.stringify(treq.body))
})



app.get('/*', (req, res) => {
    const fs = require('fs');
    const path = `${__dirname}/client/dist/client${req.url}`
   fs.access(path, fs.constants.R_OK, err =>{
        if (!err) {
            res.sendFile(path);
        } else {
            res.sendFile(`${__dirname}/client/dist/client/index.html`);
        }
    })
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);