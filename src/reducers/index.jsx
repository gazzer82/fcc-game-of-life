import { combineReducers } from 'redux';
import CellsReducer from './reducer_cells';
import ResReducer from './reducer_res';
import ControlsReducer from './reducer_controls';
import GenerationReducer from './reducer_generation';

const rootReducer = combineReducers({
  cells: CellsReducer,
  res: ResReducer,
  controls: ControlsReducer,
  generation: GenerationReducer
});

export default rootReducer;
