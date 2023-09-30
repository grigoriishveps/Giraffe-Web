import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/components/store/store'
import { Giraffe } from 'src/api/dto/Giraffe.dto'

interface AviaryState {
  currentId: Nullable<string>
  giraffes: Giraffe[]
}

// Define the initial state using that type
const initialState: AviaryState = {
  currentId: null,
  giraffes: []
}

export const aviarySlice = createSlice({
  name: 'aviary',
  initialState,
  reducers: {
    setCurrentAviary: (state, action: PayloadAction<string>) => {
      state.currentId = action.payload
    }
  }
})

export const { setCurrentAviary } = aviarySlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.aviary.currentId

export default aviarySlice.reducer
