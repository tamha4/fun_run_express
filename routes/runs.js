// const { Router } = require('express');

const express = require('express');
const router = express.Router();

const Run = require('models/Run');

/* GET home page. */
router.get('/', async (req, res,) => {
  const runs = await Run.findAll();
  res.render('runs/index', { 
    title: 'Available Runs',
    runlist: runs
  });
});


//Get a single run from the database
router.get('/:id', async (req, res) => {
  const requestedId = req.params.id;
  const run = await Run.findOne ({
    where: {id: requestedId}
  });
  
  res.render('runs/detail', {
    title: 'Run Details',
    runItem: run
  });
});

module.exports = router;