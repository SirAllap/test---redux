import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Trabajador = ({ valor, index, onActualizar, onEliminar }) => {
  const departamentos = useSelector(
    (state) => state.misDepartamentos.departamentos
  )

  return (
    <>
      <div className='columna'>
        <div className='fotoUsuario'>
          <img src={valor.picture.large} alt='' />
        </div>
        <div className='nombreUsuarios'>
          <strong>
            {valor.name.last}, {valor.name.first}
          </strong>
        </div>
        <div>{valor.location.city}</div>
        <div>{valor.location.country}</div>
        <div>
          <select onChange={(e) => onActualizar(e.target.value, index)}>
            <option value=''>Selecciona:</option>
            {departamentos.map((esteValor, index) =>
              valor.departamento === esteValor ? (
                <option selected key={index}>
                  {esteValor}
                </option>
              ) : (
                <option key={index}>{esteValor}</option>
              )
            )}
          </select>
        </div>
        <button onClick={() => onEliminar(valor)}>Eliminar</button>
      </div>
    </>
  )
}

export default Trabajador
