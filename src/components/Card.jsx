import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import './Card.css'

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className='cartas'>
         <button className='fav' onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
         <div>
            <img className='imagen' src={image} alt={name} />
         </div>

         <div>
            <div>
               <Link className='LinkDetails' to={`/detail/${id}`}>
                  <h2 className='NombreCarta'>{name}</h2>
               </Link>
            </div>

            <div className='datos'>
               <h2>Specie: {species}</h2>
               <h2>Gender: {gender}</h2>
            </div>

            <div>
               <button className='onClick' onClick={() => onClose(id)}>X</button>
            </div>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);

// en el alt de la img puedo poner una descripcion entre comillas o llamar al nombre por si no abre el archivo
// La funcion onClose tambien la tengo que pasar al destructuring
//Esto lo hago aca, asi (sin traer a Rick) porque lo quiero reutilizar con las otras carsds
// datail va con comillas invertidas porque es variable. Tiene que estar entre llavez porque es de JS