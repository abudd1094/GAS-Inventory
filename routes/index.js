const express = require('express');
const router  = express.Router();
const { checkConnected } = require('../configs/middlewares');
const bcrypt = require("bcrypt")
const bcryptSalt = 10;

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/inventory', checkConnected, (req, res, next) => {
  res.render('inventory')
})

module.exports = router;