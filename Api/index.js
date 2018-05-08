const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const server = express();
const authenticationRouter = require('./Routes/authentication');
const usersRouter = require('./Routes/users');
const paymentsRouter = require('./Routes/payments');
 // const linksRouter = require('Routes/links');
const PORT = 2000;
server.use(bodyParse.json());
//setup cors options here
server.use(cors());
/* The default API Page */
server.get('/', (req,res) => {
    res.send('<h1>Linkstasite API Server</h1>');
});
server.use('/authentication', authenticationRouter);
server.use('/users', usersRouter);
server.use('/payments', paymentsRouter);
// server.use('/links', linksRouter);
const App = server.listen(PORT, () => {
    console.log('Linkstasite Api Running...');
});
