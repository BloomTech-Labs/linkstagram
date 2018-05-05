const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const paymentsRouter = express.Router();

paymentsRouter.get('/', (req, res) => { });
paymentsRouter.post('/', (req, res) => { });

module.exports = paymentsRouter;