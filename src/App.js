import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'

function App () {
  const [ characters, setCharacters ] = useState([])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then(r => r.json())
      .then((d) => {
         if (d.name) {
            setCharacters([...characters, d]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  }

  const onClose = (e) => {
    setCharacters(characters.filter(el => el.id != e.target.id))
  }

  return (
    <div className='App'>
      <Nav
        onSearch={onSearch}
      />
      <hr />
      <Routes>
        <Route
          path='/'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/detail/:detailId'
          element={<Detail />}
        />
      </Routes>
        
    </div>
  )
}

export default App
