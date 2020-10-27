let router = require('express').Router();
let bearer = require('./auth/middleware/bearer-auth.js');
router.get('/secret', bearer, (req, res) => {
  res.json(req.user);
});


module.exports = router;