import {combineReducers} from 'redux';
import countReducer from './counterReducer';
import todoReducer from './todoReducer';
const rootReducer = combineReducers({
  counter: countReducer,
  todo: todoReducer,
});

export default rootReducer;
