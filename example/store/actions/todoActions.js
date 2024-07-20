import {ADDITEM, REMOVEITEM} from '../types/todoTypes';

const addItem = value => {
  console.log(value);
  return async dispatch => {
    dispatch({
      type: ADDITEM,
      payload: value,
    });
  };
};
const removeItem = value => {
  console.log(value);
  return async dispatch => {
    dispatch({
      type: REMOVEITEM,
      payload: value,
    });
  };
};
export {addItem, removeItem};
