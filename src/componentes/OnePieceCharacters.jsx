import React from 'react'

const OnePieceCharacters = ({ data }) => {
  return (
    <>
      <div className='presentacion'>
        <div className='personaje'>
          <div className='datos'>
            <div className='nombre'>Name: {data.french_name}.</div>
            <div>Size: ({data.size})</div>
            <div>Age: ({data.age})</div>
            <div>Bounty: ({data.bounty})</div>
            <div>Status: ({data.status})</div>
            <div>Job: ({data.job})</div>
            <div>Birthday: ({data.birthday})</div>
          </div>
          {/* <div className='botones'>
            <button className='rojo'>Ocultar</button>
            <button className='verde'>Guardar</button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default OnePieceCharacters
