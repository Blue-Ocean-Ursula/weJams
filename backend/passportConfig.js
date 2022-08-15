const User = require('./db/user.js');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

module.exports = async function(passport) {
  console.log('enter this file')
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({username: username}, (err, user) => {
        if (err) {
          throw err;
        }
        if (!user) {
          return done(null, false);
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            throw err;
          }
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
      })
    })
  )

  passport.serializeUser((user,cb) => {
    cb(null, user.id)
  })
  passport.deserializeUser(async (id, cb) => {
    User.findOne({_id: id}, (err, user) => {
      cb(err, user);
    })
  })
}