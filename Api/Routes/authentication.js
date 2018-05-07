const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const authenticationRouter = express.Router();

authenticationRouter.get('/', (req, res) => { });
authenticationRouter.post('/', (req, res) => { });

module.exports = authenticationRouter;