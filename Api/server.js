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

app.listen(port, () => console.log(`http://localhost:${port}`))