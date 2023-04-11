import {Link} from 'react-router-dom';



export default function Card({id, name, gender, status, origin, onClose, species, image}) {
   return (
      
         <div className='cartas'>
         <button className='onClick' onClick={()=>onClose(id)}>
            X
         </button>
             <Link className= 'LinkDetails' to= {`/detail/${id}`}> 
                <h2 className='NombreCarta' >{name}</h2>
             </Link>
                <img className='imagen' src={image} alt={name} /> 
                <div className= 'datos'>
                <h2>{status}</h2>
                <h2>{species}</h2>
                <h2>{gender}</h2>
                <h2>{origin}</h2>
               </div>
      </div>
   
   );
}

// en el alt de la img puedo poner una descripcion entre comillas o llamar al nombre por si no abre el archivo
// La funcion onClose tambien la tengo que pasar al destructuring
//Esto lo hago aca, asi (sin traer a Rick) porque lo quiero reutilizar con las otras carsds
// datail va con comillas invertidas porque es variable. Tiene que estar entre llavez porque es de JS