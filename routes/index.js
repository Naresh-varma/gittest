var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('AM I HERE ?');
  res.sendFile((('C:/Users/ndongari/Documents/workspace/blog-app/public/light-bootstrap-dashboard-master/dashboard.html')));
});

module.exports = router;
