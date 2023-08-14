import React from 'react'
import { useSelector } from 'react-redux'
import Candidato from './Candidato'

const CandidatoOculto = ({ valor, index, onRevertirOculto }) => {
  return (
    <>
      <div className='presentacion'>
        <div className='usuario'>
          <div className='foto'>
            <img src={valor.picture.large} alt='' />
          </div>
          <div className='datos'>
            <div className='nombre'>
              {valor.name.title}. {valor.name.first} {valor.name.last}
            </div>
            <div>
              Ubicación: {valor.location.city} ({valor.location.country})
            </div>
            <div>
              <a href='#'>{valor.email}</a>{' '}
            </div>
            <div>
              <a href='#'>{valor.phone}</a>{' '}
            </div>
          </div>
          <div className='botones'>
            <button
              className='azul'
              onClick={() => onRevertirOculto(valor, index)}
            >
              Revertir & Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CandidatoOculto
