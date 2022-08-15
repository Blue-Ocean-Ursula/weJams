var express = require('express');
var router = express.Router();
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
require('../passportConfig')(passport);
const {JamsAuth} = require('../db/schema.js');


router.get('/', function(req, res, next) {
  console.log('abc')
  res.status(200).send('respond with a resource');
});

router.post('/login', (req, res, next) => {
  console.log(req.body)
  console.log('!!!')
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      throw err;
    }
    if (!user) {
      res.send('no user exists')
    } else {
      req.logIn(user, err => {
        if (err) {
          throw err;
        }
        res.send('successfully authenticated');
        console.log(req.user)
      })
    }
  })(req, res, next)
})

router.post('/register', async (req, res) => {
  console.log('???')
  console.log(req.body);
  try {
    const result = await JamsAuth.findOne({username: req.body.username})
    if (result) {
      res.status(201).send('User Already Existeds')
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new JamsAuth({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      })
      await newUser.save();
      res.status(201).send('User Created')
    }

  }
  catch(err) {
    console.log(err)
    res.status(404).send('User Not Created')
  }
})

router.get('/getUser', (req, res) => {
  console.log(req.user)
  res.send(req.user)

})

module.exports = router;


