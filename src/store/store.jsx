import { configureStore } from '@reduxjs/toolkit'
import { miSlice, departamentosSlice } from './miSlice'

export default configureStore({
  reducer: {
    misTrabajadores: miSlice.reducer,
    misDepartamentos: departamentosSlice.reducer,
  },
})
