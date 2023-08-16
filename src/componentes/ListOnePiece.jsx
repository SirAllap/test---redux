import React, { useEffect, useState } from 'react'
import OnePieceCharacters from './OnePieceCharacters'
import { Link } from 'react-router-dom'

const ListOnePiece = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.api-onepiece.com/characters')
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .then(() => setLoading(false))
  }, [])

  return (
    <>
      <h1 className='title-characters'>One Piece Characters</h1>
      <div className='upper-buttons'>
        <Link to='/'>
          <button className='top-button'>Back</button>
        </Link>
      </div>

      <div className='presentacion'>
        {loading ? (
          <h1>LOADING</h1>
        ) : (
          characters.map((data, index) =>
            !data.size ||
            !data.age ||
            !data.bounty ||
            !data.status ||
            !data.job ? (
              false
            ) : (
              <OnePieceCharacters key={index} index={index} data={data} />
            )
          )
        )}
      </div>
    </>
  )
}

export default ListOnePiece
