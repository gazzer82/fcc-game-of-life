//import action constants
import { GENERATE_CELLS, CELL_DEAD, CELL_ALIVE, CELLS_UPDATED } from '../actions/actions_cells';

//Respons to actions
export default function(state = [], action){
  switch(action.type){
    //Generate Cells
    case GENERATE_CELLS:
      return action.payload;
    //Cell set as alive
    case CELL_ALIVE:
      var arrayTemp = state.slice()
      arrayTemp[action.payload].status = 1;
      return arrayTemp
    //Cell set as dead
    case CELL_DEAD:
      var arrayTemp = state.slice()
      arrayTemp[action.payload].status = 0;
      return arrayTemp
    case CELLS_UPDATED:
      return action.payload;
  }
  return state;
}
