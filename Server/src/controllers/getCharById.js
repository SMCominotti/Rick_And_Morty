const axios = require('axios');

 const getCharById = (res,id) => {
    axios(`http://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        let char= {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species:data.species,
            status: data.status,
            origin: data.origin.name
        }
    res
    .writeHead (200,{'Content-Type':'application/json'})
    .end(JSON.stringify(char))
        })
    .catch (error => 
        res
        .writeHead (500,{'Content-Type':'Text/plain'})
        .end('error.message')
    )
 }

module.exports= getCharById;