import express from 'express';
import session from 'express-session';
import passport from 'passport';
import Instagram from 'passport-instagram';
import axios from 'axios';
const app = express();
const port = process.env.PORT || 5656;

app.use(express.static(__dirname + '/public'));


app.get('/', (req,res) => {
  res.render('login')    // bring user to views/login
})
//initialize passport middleware in express-session
app.use(session({
  secret: 'sytr456-65tyrd-12wrt',
  resave: true, 
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());
// we we are using user instead of user.id here because we want all the user info that we are grabbing in our instagram strategy
passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((user, done) => {
  done(null, user)
})
app.listen(port, () => console.log(`http://localhost:${port}`))