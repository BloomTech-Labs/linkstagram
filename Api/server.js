import express from 'express';
import session from 'express-session';
import passport from 'passport';
import Instagram from 'passport-instagram';
import axios from 'axios';
import passport from './Authentication/passport';
import { instagram } from './Authentication/strategies';
import index from './routes/index';
import auth from './routes/auth';
import users from './routes/users';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


app.get('/', (req,res) => {
  res.render('login')    // bring user to views/login
})
//initialize passport middleware in express-session
app.use(session({
  secret: 'jjasdfioer;lhi-4oidsyasdouUUERJj5763hjh',  //this can be any random string
  resave: true, 
  saveUninitialized: true
}))
//authenticate with passport using instagram strategy
passport(app);
instagram()

//  routing
app.use('/', index);
app.use('/users', users);
app.use('/auth', auth);

app.get('/logout', (req,res) => {
  req.logout()
  res.redirect('/')
});

app.listen(port, () => console.log(`http://localhost:${port}`))