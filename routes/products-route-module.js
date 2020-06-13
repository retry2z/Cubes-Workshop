const express = require('express');
const router = express.Router();
const cubeController = require('../controllers/cube-controller');
const accessoryController = require('../controllers/accessory-controller');


//CREATE

router.get('/create', async (req, res) => {
    await cubeController.create.get(req, res);
});


router.post('/create', async (req, res) => {
    await cubeController.create.post(req, res);
    res.redirect('/');
});


//LIST

router.get('/list', async (req, res) => {
    await cubeController.list.get(req, res);
});

//DETAILS

router.get('/details/:id', async (req, res) => {
    await cubeController.details.get(req, res);
});

router.post('/details/:id', async (req, res) => {
    await cubeController.details.post(req, res);
    res.redirect(`/cubic/details/${req.params.id}`);
});

//REMOVE

router.delete('/remove/:id', (req, res) => {
    console.log('works');
});


// ACCESSORIES

module.exports = router;