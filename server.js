'use strict';

const express = require('express');

const client = require('./employee-db-client');

const authMiddleware = require('./athentication-middleware')

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser());

app.get('/api/employees/', authMiddleware,  (req, res) => {
        client.getEmployees().then(result => res.end(JSON.stringify(result)))
    }
)

app.get('/api/employee/:id', authMiddleware, (req, res) => {
   client.getEmployee(req.params.id).then(emp => res.end(JSON.stringify(emp)))
})

app.delete('/api/employee/:id', authMiddleware, (req, res) => {
    client.deleteEmployee(req.params.id).then(() => res.end())
})

app.post('/api/employee', authMiddleware, (req, res) => {
    client.addEmployee(req.body).then(result => {
        res.end(JSON.stringify(result))
    })

})
app.put('/api/employee/:id', authMiddleware, (req, res) => {
    console.log('employee', req.body)
    client.updateEmployee(req.body).then(result => {
        res.end(JSON.stringify(result))
    })
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