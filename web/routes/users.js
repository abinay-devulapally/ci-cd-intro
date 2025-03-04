const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  console.log("THIS IS TEST LOGGING")
  res.send('respond with a resource')
})

module.exports = router
