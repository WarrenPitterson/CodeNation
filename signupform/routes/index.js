var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});

router.post('/', function(req, res, next) {
    console.log(req.body)
    res.render('index', { title: req.body.text });
})

module.exports = router;
