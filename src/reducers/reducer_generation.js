//import action constants
import { UPDATE_GENERATION } from '../actions/actions_cells';

//Respons to actions
export default function(state = 1, action){
  switch(action.type){
    case UPDATE_GENERATION:
      return action.payload;
    default:
      return state;
  }
}
