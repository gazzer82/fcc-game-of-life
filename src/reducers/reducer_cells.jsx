import { CELLS_UPDATED } from '../actions/actions_cells';
import { GENERATE_CELLS } from '../actions/actions_cells';

export default function(state = [], action){
  console.log(action.type);
  switch(action.type){
    case GENERATE_CELLS:
      console.log('GENERATE_CELLS action creator');
      return state;
    default:
      console.log('default action creator');
      return state;
  }
  return state;
}
