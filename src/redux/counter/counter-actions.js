import { createAction } from '@reduxjs/toolkit';

// export const increment = value => ({
//   type: 'counter/Increment',
//   payload: value,
// });

// export const decrement = value => ({
//   type: 'counter/Dcrement',
//   payload: value,
// });

export const increment = createAction('counter/Increment');
export const decrement = createAction('counter/Dcrement');
