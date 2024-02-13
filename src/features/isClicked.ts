import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isClicked: false,
};

const isClickedSlice = createSlice({
  name: 'isClicked',
  initialState,
  reducers: {
    setIsClicked: (state, action) => {
      state.isClicked = action.payload;
    },
  }
});

export const { setIsClicked } = isClickedSlice.actions;

export default isClickedSlice.reducer;
