// const { Router } = require('express');

const express = require('express');
const router = express.Router();

const Run = require('models/Run');

/* GET home page. */
router.get('/', async (req, res,) => {
  const runs = await Run.findAll();
  res.render('runs', { 
    title: 'Available Runs',
    runlist: runs
  });
});

module.exports = router;