import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Trabajador from './Trabajador'
import { eliminarUnValor, modificarUnValor } from '../store/miSlice'

const Gestion = () => {
  const dispatch = useDispatch()

  const actualizar = (continente, index) => {
    dispatch(
      modificarUnValor({
        indice: index,
        nuevoContinente: continente,
      })
    )
  }

  const eliminar = (valor) => {
    dispatch(
      eliminarUnValor({
        nombre: valor.name.first,
        apellido: valor.name.last,
        telefono: valor.cell,
      })
    )
  }

  const listaTrabajadores = useSelector(
    (state) => state.misTrabajadores.trabajadores
  )
  return (
    <>
      <h1 className='title-trabajadores'>Trabajadores:</h1>
      <div className='upper-buttons'>
        <Link to='/candidatos'>
          <button className='top-button button-candidatos'>Candidatos</button>
        </Link>
      </div>
      <div className='usuarios'>
        {listaTrabajadores.map((valor, index) => (
          <Trabajador
            key={index}
            valor={valor}
            index={index}
            onActualizar={actualizar}
            onEliminar={eliminar}
          />
        ))}
      </div>
    </>
  )
}

export default Gestion
