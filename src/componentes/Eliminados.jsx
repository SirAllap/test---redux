import React from 'react'
import { Link } from 'react-router-dom'

function Eliminados() {
  return (
    <>
      <h1 className='title-trabajadores'>Trabajadores:</h1>
      <div className='upper-buttons'>
        <Link to='/gestion'>
          <button className='top-button'>Trabajadores</button>
        </Link>
      </div>
      <div className='usuarios'></div>
    </>
  )
}

export default Eliminados
