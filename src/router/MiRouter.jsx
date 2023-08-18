import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Listado from '../componentes/Listado'
import Gestion from '../componentes/Gestion'
import Ocultos from '../componentes/Ocultos'
import ListOnePiece from '../componentes/ListOnePiece'
import Eliminados from '../componentes/Eliminados'

const MiRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Listado />} />
        <Route path='/candidatos' element={<Listado />} />
        <Route path='/gestion' element={<Gestion />} />
        <Route path='/ocultos' element={<Ocultos />} />
        <Route path='*' element={<Listado />} />
        <Route path='/anime' element={<ListOnePiece />} />
        <Route path='/eliminados' element={<Eliminados />} />
      </Routes>
    </>
  )
}

export default MiRouter
