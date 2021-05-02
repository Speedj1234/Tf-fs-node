var express= require('express');
var router = express.Router();
var film_ctl = require ('../Controllers/film_controller')

router.get('/', film_ctl.getAll )
router.get('/id/:id', film_ctl.getById);

router.post('/create', film_ctl.createFilm);

router.delete('/:id', film_ctl.deleteFilm);

router.put('/:id', film_ctl.updateFilm);


module.exports = router;