'use strict';

const express = require('express');
const app = express();
const yaml = require('js-yaml');
const fs = require('fs');

const PORT = '9085';
const HOST = 'localhost';
const URL =`http://${HOST}:${PORT}`;

let contents = yaml.safeLoad(fs.readFileSync('./build.yml', 'utf8')).application;

app.get('/', (req, res) => {
    res.send('Hello World')
})

// status page
app.get('/status', (req, res) => {
    try {
        let output = {
            [contents.name]: [{
                "version": contents.version,
                "description": contents.description,
                "lastcommitssha": process.env.LASTCOMMIT
            }]
        }
        res.status(200).send(output)
    } catch (err) {
        res.status(400).send(err)
    }
})

const server = app.listen(PORT, () => {
    console.log(`App is running at: ${URL}`);
});

module.exports = app
