import React, { useEffect, useState } from 'react'
import OnePieceCharacters from './OnePieceCharacters'

const ListOnePiece = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://api.api-onepiece.com/characters')
      .then((response) => response.json())
      .then((data) => setCharacters(data))
  }, [])

  return (
    <>
      <div className='presentacion'>
        {characters.map((data, index) => (
          <OnePieceCharacters key={index} index={index} data={data} />
        ))}
      </div>
    </>
  )
}

export default ListOnePiece
