let router = require('express').Router();
let bearer = require('./auth/middleware/bearer-auth.js');
let permissions =require('./auth/middleware/authorize.js')
router.get('/secret', bearer, (req, res) => {
  res.json(req.user);
});
router.get('/read', bearer, permissions('read'), (req, res) => {
  res.send('Route /read worked');
});
router.post('/add', bearer, permissions('create'), (req, res) => {
  res.send('Route /create worked');
});
router.put('/change', bearer, permissions('update'), (req, res) => {
  res.send('Route /update worked');
});
router.delete(
  '/remove',
  bearer,
  permissions('delete'),
  (req, res) => {
    res.send('Route /delete worked');
  }
);


module.exports = router;