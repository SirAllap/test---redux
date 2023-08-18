import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Trabajador = ({ valor, index, onActualizar, onEliminar }) => {
  const departamentos = useSelector(
    (state) => state.misDepartamentos.departamentos
  )

  return (
    <>
      <div className='columna'>
        <div className='foto'>
          <img src={valor.picture.large} alt='' />
        </div>
        <div className='datos'>
          <div className='nombreUsuarios'>
            <strong>
              <strong className='stronger'>FN:</strong>{' '}
              <u>
                {valor.name.last}, {valor.name.first}
              </u>
            </strong>
          </div>
          <div>
            <strong className='stronger'>City:</strong> {valor.location.city}
          </div>
          <div>
            <strong className='stronger'>Country:</strong>{' '}
            {valor.location.country}
          </div>
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
        </div>
        <button
          className='button-candidatos-a-eliminar'
          onClick={() => onEliminar(valor)}
        >
          Eliminar
        </button>
      </div>
    </>
  )
}

export default Trabajador
