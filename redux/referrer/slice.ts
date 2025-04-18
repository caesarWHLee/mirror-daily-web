import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type ReferrerState = {
  previousURL: string | null
  currentURL: string | null
}

const initialState: ReferrerState = {
  previousURL: null,
  currentURL: null,
}

const referrerSlice = createSlice({
  name: 'referrer',
  initialState,
  reducers: {
    updateURL: (state, action: PayloadAction<string>) => {
      state.previousURL = state.currentURL
      state.currentURL = action.payload
    },
  },
})

export const { updateURL } = referrerSlice.actions
export default referrerSlice.reducer
