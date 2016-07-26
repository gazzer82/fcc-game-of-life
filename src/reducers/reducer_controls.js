//import action constants
import { START_GAME, STOP_GAME, SPEED } from '../actions/actions_controls';

const defaultState = {
  speed: 250,
  game: 'running'
}

//Respons to actions
export default function(state = defaultState, action){
  switch(action.type){
    case START_GAME:
      return {
        ...state,
        game: 'running'
      }
    case STOP_GAME:
      return {
        ...state,
        game: 'stopped'
      }
    case SPEED:
      console.log('setting speed');
      return {
        ...state,
        speed: action.payload
      }
    default:
      return state
  }
}
