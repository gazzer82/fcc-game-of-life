export const START_GAME = 'START_GAME';
export const STOP_GAME = 'STOP_GAME';
export const SPEED = 'SPEED';

export function setSpeed(speed){
  console.log(speed);
  return {
    type: SPEED,
    payload: speed
  }
}

export function startGame(){
  return {
    type: START_GAME,
    payload: 'start'
  }
}

export function stopGame(){
  return {
    type: STOP_GAME,
    payload: 'stop'
  }
}
