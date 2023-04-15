import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form.jsx'
import Favorites from './components/Favorites';




const URL_BASE ='https://be-a-rym.up.railway.app/api/character';
const API_KEY= '7e8f7b965f91.59e0763ac8d79339eae1';

const EMAIL= 'stel@gmail.com';
const PASSWORD= 'Stel1234';

function App() {
   const [characters, setCharacters] = useState ([]); // va con corchetes porque useState retorna un array
   const location = useLocation();
   const navigate= useNavigate();
   const [access,setAccess]= useState(false);

   function login(userData){
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
         navigate('/home');
      }
   }

    useEffect(()=>{
      !access && navigate('/');
    },[access,navigate]);


   const onSearch = (id) => {
       axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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
      const charactersFiltered = characters.filter(character => character.id !== (id))//pongo eso porque sino uno llega como string
      setCharacters(charactersFiltered)
   }
//si el personaje tiene un id distinto al que me mandan, quedatelo, sino no.

return (
   <div className='App'>
      {
         location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>
         //esto es para que la barra solo se muestre cuando no este en el logging
      }
     <Routes>
       <Route path='/' element={<Form login={login} />} />
       <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
       <Route path='/about' element={<About />} />
       <Route path='/detail/:id' element={<Detail />} />
       <Route path='/favorites' element={<Favorites />} />
     </Routes>
   </div>
 );
}

   //Para mostrar la barra de navegación solo cuando no estamos en la ruta /, puedes usar el componente useLocation de react-router-dom. Este componente te permite obtener la ruta actual de la aplicación y usarla para renderizar los componentes de forma condicional. Estamos usando la variable location.pathname para comprobar si estamos en la ruta raíz /. Si es así, la variable renderNav será false y la barra de navegación no se mostrará. De lo contrario, renderNav será true y la barra de navegación se mostrará.
 
//onSearch se paso como propiedad a Nav
// Nav debe estar en todas las rutas
export default App;
