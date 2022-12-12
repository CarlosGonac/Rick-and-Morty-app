import { useState } from "react";

export default function SearchBar(props) {
   const [ character, setCharacter ] = useState('')

   const handlingChange = (e) => {
      setCharacter(e.target.value)
   }

   return (
      <div>
         <input type='search' onChange={handlingChange} value={character} />
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
