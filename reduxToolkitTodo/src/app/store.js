import {configureStore} from '@reduxjs/toolkit';    
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})


const store = createStore(
    reducer, /* preloadedState, */
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );