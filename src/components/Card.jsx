export default function Card({id,name, gender, status, origin, onClose, species, image}) {
   return (
      <div>
         <button onClick={()=>onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} /> 
      </div>
   );
}

// en el alt de la img puedo poner una descripcion entre comillas o llamar al nombre por si no abre el archivo
// La funcion onClose tambien la tengo que pasar al destructuring
//Esto lo hago aca, asi (sin traer a Rick) porque lo quiero reutilizar con las otras carsds
