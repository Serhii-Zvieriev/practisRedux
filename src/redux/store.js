// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './counter/counter-reduser';

// const initialState = {
//   counter: { value: 0, step: 3 },
// };

// const reducer = (state = initialState, action) => {
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

// const store = createStore(reducer, composeWithDevTools());

// const store = createStore(reducer);

const store = configureStore({
  reducer,
});

export default store;
