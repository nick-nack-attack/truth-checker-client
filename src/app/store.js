import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import counter2Reducer from '../features/Facts/factsSlice';

// set up a store
export default configureStore({
  // set reducer
  reducer: {
    counter: counterReducer,
    counter2: counter2Reducer
  },
});
