
const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/videosController');

const { authenticateJWT } = require('../auth')

//  == This route will give us back all videos: ==  //

router.get('/', controller.findAll);

//  == This route will give us back one video, it will be that with the id we are providing: ==  //

router.get('/find/:name', authenticateJWT, controller.findOne);

//  == This route allow us to add an extra video: ==  //

router.post('/add/', authenticateJWT, controller.insert);

//  == This route allow us to delete one video will be that with the id we are providing: ==  //

router.post('/delete', authenticateJWT, controller.delete);

//  == This route allow us to update one video will be that with the id we are providing ==  //

router.post('/update', authenticateJWT, controller.update);

module.exports = router;