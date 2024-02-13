import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentMode: '',
};

const currentModeSlice = createSlice({
  name: 'currentMode',
  initialState,
  reducers: {
    setCurrentMode: (state, action) => {
      state.currentMode = action.payload;
    },
  }
});

export const { setCurrentMode } = currentModeSlice.actions;

export default currentModeSlice.reducer;
