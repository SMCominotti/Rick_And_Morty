function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button> 
      </div>
   );
}

export default SearchBar;

//NO TENGO QUE INVOCAR A LA FUNCION, SE TIENE QUE EJECUTAR CUANDO HAGO CLICK