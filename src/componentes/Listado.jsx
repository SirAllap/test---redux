import React, { useEffect, useState } from 'react'
import Candidato from './Candidato'
// import AnimeCard from './AnimeCard '
import { useDispatch, useSelector } from 'react-redux'
import { agregarUnvalor } from '../store/miSlice'
import { Link } from 'react-router-dom'

const Listado = () => {
  const [candidatos, setCandidatos] = useState([])
  const listaTrabajadores = useSelector(
    (state) => state.misTrabajadores.trabajadores
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

  const guardarUno = (valor, index) => {
    const nuevoValor = { ...valor, departamento: '' }
    dispatch(agregarUnvalor(nuevoValor))
    buscarUno(index)
  }

  // useEffect(() => {
  //   const options = {
  //     headers: {
  //       'X-RapidAPI-Key': '3e8ec3e4a3mshafa5b7b71b92b3dp151361jsn8e43f9ed44d1',
  //       'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com',
  //     },
  //   }
  //   fetch('https://myanimelist.p.rapidapi.com/anime/top/all', options)
  //     .then((response) => response.json())
  //     .then((datos) => setCandidatos(datos.results))
  //   // .then((datos) => setCandidatos(datos))
  // }, [])

  return (
    <>
      <h1>Candidatos</h1>
      <Link to='/gestion'>
        <button>Trabajadores</button>
      </Link>
      <div className='presentacion'>
        {candidatos.map((valor, index) => (
          <Candidato
            key={index}
            index={index}
            valor={valor}
            onBuscarUno={buscarUno}
            onGuardarUno={guardarUno}
          />
        ))}
      </div>

      <hr />

      <div className='candidatos'>
        {listaTrabajadores.map((valor, i) => (
          <Link key={i} to='/gestion'>
            <button>{valor.name.first}</button>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Listado
