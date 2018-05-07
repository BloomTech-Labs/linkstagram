// const express = require('express');
// const bodyParse = require('body-parser');
// const cors = require('cors');
// const axios = require('axios');
// const authenticationRouter = express.Router();

// authenticationRouter.get('/', (req, res) => { });
// authenticationRouter.post('/', (req, res) => { });

// module.exports = authenticationRouter;

//using passport for authentication, this allows for preconfigured instagram strategy and tokenimport passport from 'passport';
import passport from 'passport';
export default function(app) {
    // initialise passport
    app.use(passport.initialize());
    app.use(passport.session());
  
    // setting passport 
    passport.serializeUser((user, done) => {
      done(null, user)
    })
    passport.deserializeUser((user, done) => {
      done(null, user)
    })
  }