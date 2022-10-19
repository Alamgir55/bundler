import { combineReducers } from 'redux';
import cellsRedcer from './cellsReducer';

const reducers = combineReducers({
  cells: cellsRedcer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
