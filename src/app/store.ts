import { configureStore } from '@reduxjs/toolkit';

import modesReducer from '../features/modes';
import isClickedReducer from '../features/isClicked';
import currentModeReducer from '../features/currentMode';
import isChosenReducer from '../features/isChosen';

export const store = configureStore({
  reducer: {
    modes: modesReducer, 
    isClicked: isClickedReducer,
    currentMode: currentModeReducer,
    isChosen: isChosenReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
