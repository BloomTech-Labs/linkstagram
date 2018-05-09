const express = require('express');
const axios = require('axios');
const usersRouter = express.Router();
const stripe = require('stripe')('sk_test_BQokikJOvBiI2HlWgH4olfQ2');
const Users = require('../Classes/Users');
const StripeUser = require('../Classes/StripeUser');
const PaymentProfiles = require('../Classes/PaymentProfiles');
const StripePayment = require('../Classes/StripePayment');
const InstagramUser = require('../Classes/InstagramUser');

usersRouter.post('/signup', (req, res) => {
    // we need to collect payment and then associate 
    // that payment to the user
    const { email, access_token } = req.body;    
    axios.post('https://api.instagram.com/v1/user/self', {access_token})
        .then(InstagramUserProfile => {              
            stripe.customers.create({email})
            .then(function(customer){      
              return stripe.customers.createSource(customer.id, {
                source: 'primary'
              });
            }).then(function(source) {
              return stripe.charges.create({
                amount: 20,
                currency: 'usd',
                customer: source.customer
              });
            }).then(function(charge) {
            // New charge created on a new customer
              const newInstagramUser = new InstagramUser();
              newInstagramUser
                .addInstagramUser(InstagramUserProfile.data.user.id)
                .then(newInstagramUserRecord => {
                  const newStripeUser = new StripeUser();
                  newStripeUser.addStripeUser(customer.id)
                  .then(newStripeUserRecord=> {
                    const newUser = new Users();
                    newUser.addUser(newInstagramUserRecord, newStripeUserRecord)
                      .then(newUserRecord => {
                        const newStripePayment = new StripePayment();
                        newStripePayment
                            .addStripePayment(newUserRecorded._id, customer.id, charge.id)
                            .then(newStripePaymentRecord=> {
                              const newPaymentProfile = new PaymentProfiles();
                              newPaymentProfile
                                .addPaymentProfile(newUserRecord._id, customer.id, Date.now, Date.now + '1 month', newStripePaymentRecord )
                                .then(newPaymentProfileRecord => {
                                    res.send(access_token, charge);
                                })
                                .catch(function(error) {
                                  res.status(500).send(error);
                                });
                            })
                            .catch(function(error) {
                              res.status(500).send(error);
                            });
                      })
                      .catch(function(error) {
                        res.status(500).send(error);
                      });
                  })
                  .catch(function(error) {
                    res.status(500).send(error);
                  });  
                })
                .catch(function(error) {
                  res.status(500).send(error);
                });
            }).catch(function(error) {
              res.status(500).send(error);
            });
        })
        .catch(error => {
          res.status(500).send(error)        
        });
});

module.exports = usersRouter;
