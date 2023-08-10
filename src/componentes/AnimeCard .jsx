import React, { useEffect, useState } from 'react'

const AnimeCard = ({ valor }) => {
  const [cardInfo, setcardInfo] = useState([])
  function getCardInfo() {
    const options = {
      headers: {
        'X-RapidAPI-Key': '3e8ec3e4a3mshafa5b7b71b92b3dp151361jsn8e43f9ed44d1',
        'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com',
      },
    }
    fetch(
      `https://myanimelist.p.rapidapi.com/anime/${valor.myanimelist_id}`,
      options
    )
      .then((response) => response.json())
      .then((datos) => setcardInfo(datos))
  }
  return (
    <>
      <div className='presentacion'>
        <div className='usuario'>
          <div className='foto'>
            <button onClick={getCardInfo}>
              <img src={valor.picture_url} alt='' />
            </button>
            <span>{cardInfo.synopsis}</span>
          </div>
          <div className='datos'>
            <div className='nombre'>Title: {valor.title}.</div>
            <div>Score: ({valor.score})</div>
            <div>Rank: ({valor.rank})</div>
          </div>
          <div className='botones'>
            <button className='rojo'>Ocultar</button>
            <button className='verde'>Guardar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnimeCard
