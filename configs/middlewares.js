const User = require("../models/User");

module.exports = {
  checkConnected: (req,res,next) => { // route protection to force only logged in users
    if (req.user) {
      next()
    } else {
      res.redirect('/auth/login');
    }
  }
}