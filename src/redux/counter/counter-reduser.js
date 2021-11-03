import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { increment, decrement } from '../counter/counter-actions';

// const initialState = {
//   counter: { value: 0, step: 3 },
// };

// const counterInitialState = { value: 0, step: 3 };

export const valueReduser = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

// const valueReduser = (state = 0, action) => {
//   switch (action.type) {
//     case 'counter/Increment':
//       return { ...state, value: state + action.payload };

//     case 'counter/Dcrement':
//       return { ...state, value: state - action.payload };
//     default:
//       return state;
//   }
// };

const stepReduser = (state = 3, action) => state;

const counterReducer = combineReducers({
  value: valueReduser,
  step: stepReduser,
});

const rootReducer = combineReducers({
  counter: counterReducer,
});

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'counter/Increment':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + action.payload,
//         },
//       };

//     case 'counter/Dcrement':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
export default rootReducer;
