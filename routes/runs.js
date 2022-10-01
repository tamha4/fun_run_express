// const { Router } = require('express');

const express = require('express');
const router = express.Router();

const Run = require('models/Run');
const User = require('models/User')
// const Registration = require('models/Registration')



/* GET home page. */
router.get('/', async (req, res,) => {
  const runs = await Run.findAll();
  res.render('runs/index', { 
    title: 'Available Runs',
    runlist: runs
  });
});


//Get a single run from the database
// router.get('/:id', async (req, res) => {
//   const requestedId = req.params.id;
//   const run = await Run.findOne ({
//     where: {id: requestedId},
//     includes: [{model: Run, as: 'runs'}]

//   });

  router.get('/:id', async (req, res) => {
    const requestedId = req.params.id;
    const run = await Run.findOne ({
      where: {id: requestedId},
      include: [{model: User, as: 'users'}]
    });
  

  res.render('runs/detail', {
    title: 'Run Details',
    runItem: run
  });
});

module.exports = router;