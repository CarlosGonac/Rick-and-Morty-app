import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose} id={props.id}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image}/>
      </div>
   );
}


// name: Nombre
// species: Especie
// gender: Género
// image: Imagen
// onClose: La función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.