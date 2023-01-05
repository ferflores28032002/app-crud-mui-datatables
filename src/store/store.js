import { configureStore } from '@reduxjs/toolkit'
import { clientesSlice } from './slices/clientesSlice'

export const store = configureStore({
  reducer: {
    clientes: clientesSlice.reducer
  }
})