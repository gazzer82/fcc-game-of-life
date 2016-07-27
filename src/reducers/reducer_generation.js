//import action constants
import { UPDATE_GENERATION, STEP_STATE, GENERATE_CELLS } from '../actions/actions_cells';

//Respons to actions
export default function(state = 1, action){
  switch(action.type){
    case UPDATE_GENERATION:
      return action.payload;
    case STEP_STATE:
      return state + 1;
    case GENERATE_CELLS:
      return 1;
    default:
      return state;
  }
}
