import express from 'express';
import passport from 'passport';
const authenticationRouter = express.Router();

authenticationRouter
  .get('/instagram', passport.authenticate('instagram'))
  .get('/instagram/callback', passport.authenticate('instagram', {
    successRedirect: '/users',
    failure: '/error'
  })) 

export default authenticationRouter;
