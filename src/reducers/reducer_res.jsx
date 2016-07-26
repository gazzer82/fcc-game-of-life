//import action constants
import { SET_RES } from '../actions/actions_res';

export default function(state = {width: 50, height: 30, widthClass:'fifty-wide', total: 1500}, action){
  switch(action.type){
    case SET_RES:
      return action.payload;
  }
  return state;
}
