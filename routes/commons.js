const express = require('express');
const router = express.Router();
const cube = require('../controllers/cube');


router.get('/', (req, res) => {
    res.render(
        'index',
        {
            cubes: cube.list()
        }
    );
});

router.get('/about', (req, res) => {
    res.render(
        'about',
        {

        }
    );
});

router.get('*', (req, res) => {
    res.render('404');
});


module.exports = router;