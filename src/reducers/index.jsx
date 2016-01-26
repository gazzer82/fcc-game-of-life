import { combineReducers } from 'redux';
import CellsReducer from './reducer_cells';

const rootReducer = combineReducers({
  cells: CellsReducer
});

export default rootReducer;
