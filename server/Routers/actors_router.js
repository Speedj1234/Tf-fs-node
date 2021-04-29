var express= require('express');
var router = express.Router();
var actor_ctl = require ('../Controllers/actor_controller')

router.get('/', actor_ctl.getAll )
router.get('/id/:id', actor_ctl.getById);
router.get('/name/:first_name/:last_name', actor_ctl.getByFirstnameAndLastname );

router.post('/create', actor_ctl.createACtor);

router.delete('/:id', actor_ctl.deleteActor);

router.put('/:id', actor_ctl.updateActor);


module.exports = router;