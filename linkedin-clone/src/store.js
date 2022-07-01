import { configureStore } from '@reduxjs/toolkit'
import user from './data'

export default configureStore({
  reducer: {
    data:user
  }
})