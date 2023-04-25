const URL = 'https://rickandmortyapi.com/api/character';
const axios = require('axios');

const getCharById = async (req, res) => {
   try {
    const { id } = req.params;
    const {data} = await axios(`${URL}/${id}`);
                
        if (!data.name) throw new Error (`ID: ${id} not found`);

            const character = {
                id: data.id,
                name: data.name,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender: data.gender,
                status: data.status
            };
        return res.status(200).json(character);
        
    } catch (error) {
        return error.message.includes('ID')
        ?res.status(404).send(error.message) //404 es error del usuario
        :res.status(500).send(error.message) // 500 es error del servidor
    }
};

module.exports = {
    getCharById
};
// ESTO SE ELIMINA CUANDO EMPIEZO CON BACK-END

// const axios = require('axios');// http no hace falta volver a importarlo, lo tengo en index.

//  const getCharById = (res,id) => {
//     axios(`http://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data) // el res del parametro no es igual a este response. El res del parametro el el q viene con el servidor creado, el de res.writeHead...
//     .then(data => {
//         let char= {
//             id: id, // no hace falta que le ponga data.id porque llega por parametro. Puedo poner data.id o solo id
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species:data.species,
//             status: data.status,
//             origin: data.origin
//         }
//         return res
//             .writeHead (200,{'Content-Type':'application/json'})
//             .end(JSON.stringify(char))
//             })
//     .catch (error => {
//          return res
//             .writeHead (500,{'Content-Type':'Text/plain'})
//             .end(error.message)
//        })
//  }

// module.exports= getCharById;