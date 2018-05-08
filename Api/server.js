import express from 'express';
import session from 'express-session';
import passport from 'passport';
import Instagram from 'passport-instagram';
import axios from 'axios';
import passport from './Authentication/passport';
import { instagram } from './Authentication/strategies';
import index from './Routes/index';
import authenticationRouter from './Routes/auth';
import usersRouter from './Routes/users';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


app.get('/', (req,res) => {
  res.send('<h1>Linkstasite API Server</h1>');
  res.render('login')    // bring user to views/login
})
//initialize passport middleware in express-session
app.use(session({
  secret: 'jjasdfioer;lhi-4oidsyasdouUUERJj5763hjh',  //this can be any random string
  resave: true, 
  saveUninitialized: true
}));
//authenticate with passport using instagram strategy
passport(app);
instagram();

//  routing
app.use('/', index);
app.use('/users', usersRouter);
app.use('/auth', authenticationRouter);
app.use('/payment', paymentRouter);
app.use('/links', linksRouter);

app.get('/logout', (req,res) => {
  req.logout()
  res.redirect('/');
});

app.listen(port, () => console.log(`Linkstasite Api Running at http://localhost:${port}`))