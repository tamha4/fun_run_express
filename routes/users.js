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


//Get a single users from the database
router.get('/:id', async (req, res) => {
  const requestedId = req.params.id;
  const user = await User.findOne({
      where: {id: requestedId}
  });

  res.render('users/detail', {
      title: 'User Details',
      userItem: user
  });
});

module.exports = router;
