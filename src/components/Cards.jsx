import Card from './Card'
import styles from './Cards.modules.css'

export default function Cards(props) {
   const { characters } = props
   return (
      <div className='container'>
         {characters.map(el =>
            <Card
               name={el.name}
               species={el.species}
               gender={el.gender}
               image={el.image}
               onClose={props.onClose}
               id={el.id}
               key={el.id}
            />
         )}
      </div>
   )
}
