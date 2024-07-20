import {DECREMENT, INCREMENT, RESET} from '../types/countTypes';

const incrementCount = () => {
  return async dispatch => {
    dispatch({type: INCREMENT});
  };
};
const decrementCount = () => {
  return async dispatch => {
    dispatch({type: DECREMENT});
  };
};
const resetCount = value => {
  return async dispatch => {
    dispatch({type: RESET, payload: value});
  };
};

export {incrementCount, decrementCount, resetCount};
