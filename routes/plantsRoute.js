
const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/plantsController');

const { authenticateJWT } = require('../auth')

//  == This route will give us back all plants: ==  //

router.get('/', controller.findAll);

//  == This route will give us back one plant, it will be that with the id we are providing: ==  //

router.get('/find', controller.findOne);

//  == This route allow us to add an extra plant: ==  //

router.post('/add', controller.insert);

//  == This route allow us to delete one plant will be that with the id we are providing: ==  //

router.post('/delete', controller.delete);

//  == This route allow us to update one plant will be that with the id we are providing ==  //

router.post('/update', controller.update);

module.exports = router;



