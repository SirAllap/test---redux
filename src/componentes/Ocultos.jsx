import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CandidatoOculto from './CandidatoOculto'
import { agregarUnvalor, eliminarUnValorOculto } from '../store/miSlice'

const Ocultos = () => {
  const dispatch = useDispatch()

  const listaTrabajadoresOcultos = useSelector(
    (state) => state.misTrabajadores.trabajadoresOcultos
  )

  const revertirOculto = (valor) => {
    const nuevoRevertirOculto = { ...valor, departamento: '' }
    dispatch(agregarUnvalor(nuevoRevertirOculto))
    dispatch(
      eliminarUnValorOculto({
        nombre: valor.name.first,
        apellido: valor.name.last,
        telefono: valor.cell,
      })
    )
  }

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
      <div className='usuarios'>
        {listaTrabajadoresOcultos.map((valor, index) => (
          <CandidatoOculto
            key={index}
            valor={valor}
            index={index}
            onRevertirOculto={revertirOculto}
          />
        ))}
      </div>
    </>
  )
}

export default Ocultos
