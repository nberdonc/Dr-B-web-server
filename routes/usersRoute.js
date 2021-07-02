const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/usersController');

const { authenticateJWT } = require('../auth')

router.get('/', controller.findAll);

router.post('/signin', controller.signIn);

router.post('/register', controller.insert);

router.post('/find', controller.findUser);

router.post('/delete', controller.delete);

router.post('/update', controller.update);

module.exports = router;

