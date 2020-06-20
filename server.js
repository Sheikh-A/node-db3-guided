const express = require('express');
const helmet = require('helmet');

const UserRouter = require('./users/user-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/users', UserRouter);

server.get('/', (req,res) => {
    res.send(`
    <h2>Node API 3</h2>
    <p>Welcome to Project 3</p>
        `
    )
});

module.exports = server;
