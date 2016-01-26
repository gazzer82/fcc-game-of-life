export const CELLS_UPDATED = 'CELLS_UPDATED';
export const GENERATE_CELLS = 'GENERATE_CELLS';
export const CELL_ALIVE = 'CELL_ALIVE';
export const CELL_DEAD = 'CELL_DEAD';

function createCellObject(){
  var cells = [];
  for (var i = 0; i < 100; i++) {
    cells.push('empty');
  }
  return cells
}

function generateCellsInternal(){
  console.log('generating cells in action creator');
  const cells = generateCellsInternal();
  return {
    type: GENERATE_CELLS,
    payload: cells
  }
};

export function generateCells() {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(generateCellsInternal());
  }
}

export function cellAlive(cell_id){
  return {
    type: CELL_ALIVE,
    payload: cell_id
  }
}

export function cellDead(cell_id){
  return {
    type: CELL_ALIVE,
    payload: cell_id
  }
}
