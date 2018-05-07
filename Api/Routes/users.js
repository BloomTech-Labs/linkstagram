const express = require('express');
//const bodyParse = require('body-parser');
//const cors = require('cors');
const axios = require('axios');
const usersRouter = express.Router();



usersRouter
  .use('/', (req,res, next) => {
    if(!req.user){
      res.redirect('/')
    }
    next()
  })
  .get('/', (req, res) => {
    axios.get(req.user.media)
    .then(function (response) {
      const data = response.data.data;
      let user = req.user;
      user.images = data.map(img => img.images);
      res.render('instagram', user)  
    })
  })




module.exports = usersRouter;