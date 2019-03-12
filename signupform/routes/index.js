var express = require('express');
var router = express.Router();
const User = require('../Models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express', subtitle: "hello" });
});

router.post('/', function(req, res, next) {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    const user = new User({
      name: name,
      email: email,
      password: password
    });

user.save()

})


module.exports = router;
