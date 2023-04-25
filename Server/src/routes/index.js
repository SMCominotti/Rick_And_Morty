const { login } = require( '../controllers/login');
const {getCharById } = require( '../controllers/getCharById')
const { postFav, deleteFav } = require( '../controllers/handleFavorites')
const router = require('express').Router(); //en lugar de importar express y luego el router puedo hacerlo asi

router.get('/character/:id',(req,res) =>{
    getCharById(req,res); // xq en la carptea getcharById esta esperando un req y un responde
});

router.get('/login', login);
//si yo no pongo la funcion, mi ruta no hace nada

// tambien podria poner 
//router.get ('/login', login); y tambien funciona.

router.post('/fav', (req, res) =>{
    postFav(req,res);
});

router.delete('/fav/:id', (req, res) => {
    deleteFav(req,res);
});

module.exports = router