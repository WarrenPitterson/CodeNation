var express = require('express');
var router = express.Router();
const User = require('../Models/user');
const bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express', subtitle: "hello" });
});

router.post('/', async function(req, res, next) {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

    console.log(hash)

    const user = new User({
      name: name,
      email: email,
      password: hash
    });

user.save();

res.render('index');

})


module.exports = router;
