const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  // Will get response when /users route hits
  res.send('respond with a resource')
})

module.exports = router
