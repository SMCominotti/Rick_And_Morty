import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState ([]); // va con corchetes porque useState retorna un array
   
const onSearch = (id) => {
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then(response => response.data)
   .then((data) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]); //copio lo que tenia y le agrego el data
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))//pongo eso porque sino uno llega como string
      setCharacters(charactersFiltered)
   }
//si el personaje tiene un id distinto al que me mandan, quedatelo, sino no.
   return (
      <div className='App'>
         <Nav onSearch={onSearch} /> 
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

//onSearch se paso como propiedad a Nav

export default App;
