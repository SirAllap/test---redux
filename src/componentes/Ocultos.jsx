import React from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

const Ocultos = () => {
  // const dispatch = useDispatch()

  // const recuperar = (index) => {

  // }

  return (
    <>
      <h1 className='title-candidatos-ocultos'>
        Historial de candidatos ocultos
      </h1>
      <div className='upper-buttons'>
        <Link to='/candidatos'>
          <button className='top-button button-candidatos'>Candidatos</button>
        </Link>
      </div>
    </>
  )
}

export default Ocultos
