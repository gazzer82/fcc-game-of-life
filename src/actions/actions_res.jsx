//Action constants
export const SET_RES = 'SET_RES';

//Constants for resolution size and class
const fiftyWide = {
  width: 50,
  height: 30,
  widthClass:'fifty-wide',
  total: 1500
};

const seventyWide = {
  width: 70,
  height: 50,
  widthClass:'seventy-wide',
  total: 3500
};

const hundredWide = {
  width: 100,
  height: 80,
  widthClass:'hundred-wide',
  total: 8000
};

//Fetch and return the correct resolution object
function getResObject(res){
  console.log('setting res to ' + res);
  switch(res){
    case '50':
      return fiftyWide;
    case '70':
      return seventyWide;
    case '100':
      return hundredWide;
    default:
      return fiftyWide;
  }
}

//Assign the object to the action and return it
function setResInternal(res){
  return {
    type: SET_RES,
    payload: getResObject(res)
  }
}

//Func to return res object
export function setRes(res) {
  return (dispatch, getState) => {
    dispatch(setResInternal(res));
  }
}
