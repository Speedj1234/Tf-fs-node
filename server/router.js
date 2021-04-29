var express= require('express');
var router=express.Router();

var demo_ctrl = require('./Controllers/demo_controller')
router.get('/api/', demo_ctrl.demoPage );
router.get('/api/:id/:nbr', demo_ctrl.byIdAndNbr);
router.get('/api/:id', demo_ctrl.byId);

var user_ctrl = require('./Controllers/userController')
router.get('/api_user/', user_ctrl.userPage );
router.get('/api_user/:firstname/:lastname', user_ctrl.byUserFirstnameAndLastname);
router.get('/api_user/:id', user_ctrl.byUserId);


module.exports = router;