import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL_BASE ='https://be-a-rym.up.railway.app/api/character';
const API_KEY= '7e8f7b965f91.59e0763ac8d79339eae1';

const Detail = () => {
    const{id}= useParams();
    const [character, setCharacter] = useState ({}); //inicia como un obj vacio

    useEffect(()=>{
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
        setCharacter(data); //copio lo que tenia y le agrego el data
        } else {
               window.alert('¡No hay personajes con este ID!');
       }
       });
    return setCharacter ({});
    } ,[id]);

    return (
      <div>
        <img className='imgDetail' src ={character?.image} alt={character?.name} />  
         <div className='DetailDate'>
      <h2 className='name'>{character?.name}</h2>
      <h2>{character?.status}</h2>
      <h2>{character?.species}</h2>
      <h2>{character?.gender}</h2>
      <h2>{character?.origin?.name}</h2>
         </div>
      </div>
   )
}

//otra forma de hacerlo es con condicional ternario.
// ? es if, : es elfe
//{
    //character ? <h2>{character.name}</h2> : null
//}

//otra forma es <h2>{character?.name}</h2>. Se llama condicional chaining.

export default Detail;

//la unica forma de modificar el estado  (en este caso character), es con la funcion (setCharacter)
//UseEfect es un hook que me simula los 3 ciclos de vida
//en Axios me quedo con la propiedad Data porque ahi tengo la rta de la API
//EL ARRAY DE DEPENDENCIA TIENE QUE GENERAR SI O SI PORQUE SI GENERO UN BUCLE INFINITO Y ME VAN A BANEAR (SUSPENDER) DURANTE 1 HORA