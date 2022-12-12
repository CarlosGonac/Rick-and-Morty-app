import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail () {
    const {detailId} = useParams()
    console.log(1, detailId)

    const [ character, setCharacter ] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then(r => r.json())
            .then(char => {
                if (char.name) setCharacter(char)
                else window.alert('No hay personajes con ese ID')
            })
            .catch(() => window.alert('No hay personajes con ese ID'))
        }, [detailId])

    console.log(2, character.name)

    return (
        <>
            <p>{character.name}</p>
            <br />
            <p>{character.status}</p>
            <br />
            <p>{character.specie}</p>
            <br />
            <p>{character.genrer}</p>
            <br />
            <p>{character.origin}</p>
            <br />
            <img src={character.image} alt="" />
            <Link><button>Volver al Home</button></Link>
        </>
    )
}