import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './reducers/authSlice';
import marketSlice from './reducers/marketSlice';

export type RootReducer = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  auth: authSlice,
  market: marketSlice,
});

export default rootReducer;
