import { configureStore } from '@reduxjs/toolkit'
import { aviaryApi, giraffeApi } from 'src/api/api'
import aviaryReducer from 'src/components/store/slices/aviarySlice'

export const store = configureStore({
  reducer: {
    aviary: aviaryReducer,
    [aviaryApi.reducerPath]: aviaryApi.reducer,
    [giraffeApi.reducerPath]: giraffeApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(aviaryApi.middleware)
      .concat(giraffeApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
