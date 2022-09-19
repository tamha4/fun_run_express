const express = require('express');
const router = express.Router();

const User = require('models/User');

/* GET home page. */
router.get('/', async (req, res,) => {
  const user = await User.findAll();
  res.render('users', { 
    title: 'Runners',
    userlist: user
  });
});

module.exports = router;
