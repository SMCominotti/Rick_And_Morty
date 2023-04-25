import './App.css';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorite/Favorites.jsx'


const email = 'stel@gmail.com';
const password= 'Stel1234';

function App() {
   const [characters, setCharacters] = useState ([]); // va con corchetes porque useState retorna un array
   const location = useLocation();
   const navigate= useNavigate();
   const [access,setAccess]= useState(false);

const URL = 'http://localhost:3001/rickandmorty/login';
//con esta le mandamos informacion al Back
const login = async (userData) => {
   try{
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
     
         setAccess(access);
         access && navigate('/home');
   }catch (error) {
      console.log(error.message);
   }
}


    useEffect(()=>{
      !access && navigate('/');
    },[access,navigate]);

    
   const onSearch = async (id) => {
      try{
            const {data} = await axios (`http://localhost:3001/rickandmorty/character/${id}`);
                 
          if (data.name) {
            let exist = characters.find((ch) => ch.id === data.id)
               if (exist) {
                  alert("Ya existe el personaje")
               } else {
                  setCharacters((oldChars) => [...oldChars, data]);
               }
          };              
      }catch (error){
      window.alert('¡No hay personajes con este ID!'); 
      } 
   }


   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== (id))
      setCharacters(charactersFiltered)
   }
   //pongo eso porque sino uno llega como string
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

  //elimino esto en back 
   // function login(userData){
   //    if(userData.password === PASSWORD && userData.email === EMAIL){
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }

   //y la reemplazo por esta