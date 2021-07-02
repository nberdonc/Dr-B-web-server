const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/coursesController');

const { authenticateJWT } = require('../auth')

//  == This route will give us back all courses: ==  //

router.get('/', controller.findAll);

//  == This route will give us back one course, it will be that with the id we are providing: ==  //

router.get('/find', controller.findOne);

//  == This route allow us to add an extra course: ==  //

router.post('/add', controller.insert);

//  == This route allow us to delete one course will be that with the id we are providing: ==  //

router.post('/delete', controller.delete);

//  == This route allow us to update one course will be that with the id we are providing ==  //

router.post('/update', controller.update);

module.exports = router;