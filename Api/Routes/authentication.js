const express = require('express') ;
const axios = require('axios') ;
const ClientAuth = require('./ClientAuth.js') ;
const Users = require('../Classes/Users') ;
const qs = require('qs');
const authenticationRouter = express.Router();
authenticationRouter
  .get('/:code', (req, res) => {
    const {code} = req.params;
    console.log(code, ClientAuth);
    axios.post('https://api.instagram.com/oauth/access_token', qs.stringify({ 'client_id': ClientAuth.client_id, 'client_secret' : ClientAuth.client_secret, 'redirect_uri' : ClientAuth.redirect_uri,'grant_type' : 'authorization_code','code' : code }))
    .then(response => {   
      if(response.status === 200){
        const { access_token } = response.data;
        const InstagramUserId = response.data.user.id;
        const { username, full_name } = response.data.user;
        const ProfilePictureUrl = response.data.user.profile_picture;
        const users = new Users();
        return users
          .getUserByInstagramUserId(InstagramUserId)
          .then(results => {
            if(results.length){
              res.send({access_token, registered:true,  authenticated:true});
            } else {
              res.send({access_token, registered:false,  authenticated:true});
            }
          })
          .catch(error => {
            res.status(500).send(response);
          });
      } else {
        res.status(500).send(response);
      }   
    })
    .catch(error => {
      res.status(500).json({"error" : 'Ooops'});
      console.log(error);
    });
  });

module.exports = authenticationRouter;
