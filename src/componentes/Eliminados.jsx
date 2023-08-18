import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TrabajadorEliminado from './TrabajadorEliminado'

function Eliminados() {
  const listaTrabajadoresElimnados = useSelector(
    (state) => state.misTrabajadores.trabajadoresEliminados
  )

  return (
    <>
      <h1 className='title-trabajadores'>Trabajadores:</h1>
      <div className='upper-buttons'>
        <Link to='/gestion'>
          <button className='top-button'>Trabajadores</button>
        </Link>
      </div>
      <div className='usuarios'>
        {listaTrabajadoresElimnados.map((valor, index) => (
          <TrabajadorEliminado key={index} valor={valor} index={index} />
        ))}
      </div>
    </>
  )
}

export default Eliminados
