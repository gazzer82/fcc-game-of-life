//Action constants
export const CELLS_UPDATED = 'CELLS_UPDATED';
export const GENERATE_CELLS = 'GENERATE_CELLS';
export const CELL_ALIVE = 'CELL_ALIVE';
export const CELL_DEAD = 'CELL_DEAD';
export const CLEAR_CELLS = 'CLEAR_CELLS';
export const UPDATE_GENERATION = 'UPDATE_GENERATION';
export const STEP_STATE = 'STEP_STATE';


import {stopGame} from './actions_controls';

/*function findRow(state, cell, target){
  //Set current tow by adding cell's row with the target -1, 0, +1
  let targetRow = cell.row + target;
  //Check to see if we're above or below the target
  if(targetRow === -1){
    //Above the table, so wrap to the bottom
    targetRow = cell.height-1
  } else if (targetRow > (cell.height-1)){
    //Below the table, so wrap to the top
    targetRow = 0;
  }

  let rowData = 0;

  for (let i = -1; i<2; i++){
    //caluclate column based on current cells id +1 -1
    let col = cell.col + i;
    //check to see if we are wrapping off the board
    if(col === -1){
      //wrapping of left, so make the column the last
      col = (cell.width+(cell.width*(targetRow)-1));
    } else if (col > cell.width -1){
      //wrapping of right, so make the column the first
      col = cell.width*targetRow;
    } else {
      //Nothing to do, column is the column
      col = (cell.width*targetRow)+col;
    }
    rowData += state[col].status
  }
  return rowData;
}

function findNeighbours(state, cell){
  let row1 = findRow(state, cell, -1);
  let row2 = findRow(state, cell, 0);
  let row3 = findRow(state, cell, 1);
  row2 = (cell.status === 0) ? row2 : row2-1
  return row1+row2+row3;
}

function setStatus(state, cell){
  let score = findNeighbours(state, cell)
  if(cell.status === 0){
    return (score === 3)? 1 : 0;
  } else {
    if(score < 2){
      return 0;
    } else if (score > 3){
      return 0;
    } else {
      return 1;
    }
  }
}

function calculateRow(width, count){
  return Math.floor(count/width);
}

function calculateCol(width, count){
  return Math.floor(count%width);
}

function updateGeneration(generation){
  return {
    type: UPDATE_GENERATION,
    payload: generation
  }
}

function newState(res,state,generation){
  return state;
  return state.map((cell,index) => {
    if(index < res.total){
      const cellDetails = {
        index: index,
        status: cell.status,
        width: res.width,
        height: res.height,
        total: res.total,
        row: calculateRow(res.width, index),
        col: calculateCol(res.width, index)
      }
      let status = setStatus(state, cellDetails);
      if(status !== cell.status){
        return {
          ...cell,
          status: setStatus(state, cellDetails),
          generation
        }
      } else {
        return cell;
      }
    } else {
      return cell;
    }
  })
}

function calculateState(current, generation){
  const res = current.res;
  const state = current.cells;
  const updatedState = newState(res,state,generation);
  return{
    type: CELLS_UPDATED,
    payload: updatedState
  }
}

export function stepState(){
  return (dispatch, getState) => {
    //const current =  getState();
    //const generation = current.generation + 1;
    //dispatch(calculateState(current,generation));
    //dispatch(updateGeneration(generation));
  }
}*/

export function stepState(res, generation){
  return {
    type: STEP_STATE,
    payload: {
      res,
      generation
    }
  }
}

//Create each cell object, assigning a default status
function createCellObject(total, dead){
  var cells = [];
  for (var i = 0; i < total; i++) {
    cells.push({
      status: (dead)? 0: Math.round(Math.random()),
      generation: 0
    });
  }
  return cells
}

//Create cell object and return them as the payload
function generateCellsInternal(res, dead){
  const cells = createCellObject(res.width*res.height, dead);
  return {
    type: GENERATE_CELLS,
    payload: cells
  }
};

//Export of func for generating cells
export function generateCells() {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(generateCellsInternal(state.res, false));
    //dispatch(updateGeneration(0));
  }
}

//Export function to clear all cells
export function clearCells(){
  return (dispatch, getState) => {
    const state = getState();
    dispatch(generateCellsInternal(state.res, true));
    dispatch(updateGeneration(0));
    //dispatch(stopGame());
  }
}

//export function for setting cell alive
export function setAlive(cell_id){
  return {
    type: CELL_ALIVE,
    payload: cell_id
  }
}

//export function for setting cell dead
export function setDead(cell_id){
  return {
    type: CELL_DEAD,
    payload: cell_id
  }
}
