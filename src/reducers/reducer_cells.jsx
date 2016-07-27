//import action constants
import { GENERATE_CELLS, CELL_DEAD, CELL_ALIVE, CELLS_UPDATED, STEP_STATE } from '../actions/actions_cells';

function findRow(state, cell, target){
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

function newState(res,state){
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
          generation: state.generation + 1
        }
      } else {
        return cell;
      }
    } else {
      return cell;
    }
  })
}

function calculateState(current){
  const res = current.res;
  const state = current.cells;
  return newState(res,state);
  //return{
    //type: CELLS_UPDATED,
    //payload: updatedState
  //}
}

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
    case STEP_STATE:
      //const newState = calculateState(state);
      //return newState;
      return state;
    case CELLS_UPDATED:
      return action.payload;
  }
  return state;
}
