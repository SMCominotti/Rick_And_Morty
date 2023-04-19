import {useState} from 'react';

function SearchBar({onSearch}) {
const [id,setId] = useState ('');

const handleChange= (event) =>{
   setId(event.target.value)
}

   return (
      <div>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={() => {onSearch(id); setId('')}}>Agregar</button> 
      </div>
   );
}

export default SearchBar;

//NO TENGO QUE INVOCAR A LA FUNCION, SE TIENE QUE EJECUTAR CUANDO HAGO CLICK
// El de onClick lo pongo adentro de un cb porque solo necesito que se ejecute cuando haga click