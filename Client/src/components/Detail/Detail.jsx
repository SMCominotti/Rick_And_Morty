import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Detail.css'


const Detail = () => {
    const{id}= useParams();
    const [character, setCharacter] = useState ({}); //inicia como un obj vacio

    useEffect(()=>{
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
            <div className='det'>
                   <div>
                      <label htmlFor="status"> Status: {character?.status} </label>
                   </div>
                    <div>
                       <label htmlFor="specie">Specie: {character?.species}</label>
                   </div>  
                   <div>
                     <label htmlFor="gender">Gender: {character?.gender}</label>
                 </div>  
                 <div>
                     <label htmlFor="origin">Origin: {character?.origin?.name}</label>
                 </div>  
                 <br />
            </div>
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