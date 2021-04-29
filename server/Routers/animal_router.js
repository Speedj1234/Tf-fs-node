var express= require('express');
var router=express.Router();

var demo_ctrl = require('../Controllers/demo_controller')

router.get('/', demo_ctrl.demoPage );
router.get('/animals/:id/:nbr', demo_ctrl.byIdAndNbr);
router.get('/animals/:id', demo_ctrl.byId);

var user_ctrl = require('../Controllers/userController')
router.get('/user/', user_ctrl.userPage );
router.get('/user/:firstname/:lastname', user_ctrl.byUserFirstnameAndLastname);
router.get('/user/:id', user_ctrl.byUserId);


module.exports = router;