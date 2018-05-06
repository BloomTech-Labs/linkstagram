// npm install express cors body-parser stripe

// Stripe
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const configureStripe = require('stripe');

const SERVER_PORT = 8080;
const SERVER_CONFIGS = {
  PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || SERVER_PORT,
};

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
  ? 'sk_live_MY_SECRET_KEY'
  : 'sk_test_MY_SECRET_KEY';

const CORS_WHITELIST = [
  'https://www.yourdomain.com',
  'https://yourdomain.com'
];

const corsOptions = {
  origin: (origin, callback) =>
    (CORS_WHITELIST.indexOf(origin) !== -1)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'))
};

const configureServer = app => {
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
};

const stripe = configureStripe(STRIPE_SECRET_KEY);

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

const paymentApi = app => {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  app.post('/', (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res));
  });

  return app;
};

const userRegistration = app => {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  app.post('/', (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res));
  });

  return app;
};

const configureRoutes = app => {
  paymentApi(app);
  userRegistration(app);
  userAuthentication(app);
};

configureServer(app);
configureRoutes(app);

app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log('Server running on port: ' + SERVER_CONFIGS.PORT);
});
