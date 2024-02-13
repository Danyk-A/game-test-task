import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameModes } from '../types/GameModes';

const initialState: GameModes[] = [];

const modesSlice = createSlice({
  name: 'presets',
  initialState,
  reducers: {
    setModes: (_, action: PayloadAction<GameModes[]>) => {
      return action.payload;
    },
  },
});

export const { setModes } = modesSlice.actions;

export default modesSlice.reducer;
