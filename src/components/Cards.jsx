import Card from './Card';

function Cards({characters}){ //[{..},{...}],[{...},] array de objetos
      return (
   <div>
      {
        characters.map(({id, name, status, species, gender, origin, image})=>{ //lo pongo ahi y hago destructuring de character
        return <Card
            key={id} //como las card se repiten, les pongo una key como identificador unico uso id que ya lo trae, sino usaria index
            name={name} //los pongo asi porque hice destructuring
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
        />
         })
      }
   </div>
      )
}


export default Cards;
//1ro mapeo el array
