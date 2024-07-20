import {ADDITEM, REMOVEITEM} from '../types/todoTypes';

const initialState = {
  todoList: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITEM:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case REMOVEITEM:
      return {
        ...state,
        todoList: state.todoList.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default todoReducer;
