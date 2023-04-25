const express = require('express');
const server = express();
const router = require ('./routes/index.js')
const morgan = require ('morgan')
const PORT= 3001

server.use(express.json());

server.use(morgan('dev'));

server.use((req, res, next) => {  //esto es un middleware que pasaban por consigna
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use('/rickandmorty',router);

server.listen (PORT, () => {
  console.log ('server raised in port: ' + PORT)
})




//Esto queda todo borrado cuando empezamos a trabajar con Back-end
// const http= require('http');
// const getCharById= require('./controllers/getCharById');
// //const characters= require('./utils/data');

// http.createServer((req, res) => { // con esto creo el servidor
//     res.setHeader('Access-Control-Allow-Origin', '*')// con esta linea le doy permiso al Frontend para que me haga peticiones.
//     if(req.url.includes('/rickandmorty/character')){ // dice incluye, por lo que debe tener otras cosas
//       let id= req.url.split('/').at(-1); //hago esto porque me pide el id recibido
//         getCharById(res,+id) // le pongo el mas adelante para pasarlo a Number
//     }
//   }).listen(3001,'localhost') // si no funciona, probar sacar el localhost
  
  // let id=req.url.split("/").pop(); //Esta es otra alternativa
      
 //  let id= req.url.split('/').at(-1); //con el split porngo que separe por la barra, porque yo necesito el id
 // hasta el split obtuve el siguiente array: [ '', 'rickandmorty', 'character', '3' ] y con at (-1) obtengo lo que esta en la ultima posicion. 
 // At permite agarrar posiciones especificas de un array
 //  let characterFind=characters.find(char=>char.id === Number(id)) //si a un string adelante le pongo un +, lo transforma a numero, en lugar de hacer Nunmber
   //Si necesitara que me retorne mas de 1, find no sirve, porque devuelve el primero que aparece.
  //let characterFilter= characters.filter(char => char.id === Number(id)) // Hago un filter para recorrer el array de objetos y quedarme solamente con el que coincida con el que me pasan por url. Pero todo lo que llega por url es un string y lo que tengo es un numero, por lo tanto tengo que parsearlo
//Find da el primer objeto que coincide con lo que busco. Filter devuelve un array y find un objeto. Lo que cambia es el dato que me retorna. En este ejercicio no funciona el filter y el find si

 //  res
  // .writeHead (200,{'Content-Type':'application/json'})
   //.end(JSON.stringify(characterFind))
//}


//siempre los datos que llegan x url son string.
