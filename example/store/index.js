import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import {thunk} from 'redux-thunk';

//* applyMiddleware thunkı storea eklemek için kullanırız
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
/*
 * Redux thunk, API çağrıları gibi asenkron işlemleri yönetmenizi sağlar
 */
