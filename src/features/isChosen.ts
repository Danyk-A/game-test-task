import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isChosen: false,
};

const isChosenSlice = createSlice({
  name: 'isChosen',
  initialState,
  reducers: {
    setIsChosen: (state, action) => {
      state.isChosen = action.payload;
    },
  }
});

export const { setIsChosen } = isChosenSlice.actions;

export default isChosenSlice.reducer;
