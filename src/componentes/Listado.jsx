import React, { useEffect, useState } from 'react'
import Candidato from './Candidato'
// import AnimeCard from './AnimeCard '
import { useDispatch, useSelector } from 'react-redux'
import { agregarUnvalor, agregarUnvalorOculto } from '../store/miSlice'
import { Link } from 'react-router-dom'

const Listado = () => {
  const [candidatos, setCandidatos] = useState([])
  const listaTrabajadores = useSelector(
    (state) => state.misTrabajadores.trabajadores
  )
  const listaTrabajadoresOcultos = useSelector(
    (state) => state.misTrabajadores.trabajadoresOcultos
  )
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6')
      .then((response) => response.json())
      .then((datos) => setCandidatos(datos.results))
  }, [])

  const buscarUno = (indice) => {
    fetch('https://randomuser.me/api/?results=1')
      .then((response) => response.json())
      .then((datos) => {
        const provisional = [...candidatos]
        provisional[indice] = { ...datos.results[0] }
        setCandidatos(provisional)
      })
  }

  const guardarOculto = (valor, index) => {
    const nuevoValorOculto = { ...valor, departamento: '' }
    dispatch(agregarUnvalorOculto(nuevoValorOculto))
    buscarUno(index)
  }

  const guardarUno = (valor, index) => {
    const nuevoValor = { ...valor, departamento: '' }
    dispatch(agregarUnvalor(nuevoValor))
    buscarUno(index)
  }

  return (
    <>
      <h1>Candidatos</h1>
      <Link to='/gestion'>
        <button className='top-button'>Trabajadores</button>
      </Link>
      <div className='presentacion'>
        {candidatos.map((valor, index) => (
          <Candidato
            key={index}
            index={index}
            valor={valor}
            onBuscarUno={buscarUno}
            onGuardarUno={guardarUno}
            onGuardarOculto={guardarOculto}
          />
        ))}
      </div>

      <hr />
      <div className='footerButtons'>
        <div className='candidatos'>
          <h2>Candidatos guardados:</h2>
          {listaTrabajadores.map((valor, i) => (
            <Link key={i} to='/gestion'>
              <button>{valor.name.first}</button>
            </Link>
          ))}
        </div>
        <div className='ocultados'>
          <h2>Candidatos ocultados:</h2>
          {listaTrabajadoresOcultos.map((valor, i) => (
            <Link key={i} to='/ocultados'>
              <button>{valor.name.first}</button>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Listado
