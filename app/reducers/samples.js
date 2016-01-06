'use strict';
import types from '../constants/SampleTypes';

const initialState = {
  count: 0,
  message: "input some text."
};

export default function samples(state = initialState, action) {
  switch (action.type) {
    case types.SAY_HELLO:
      let count = state.count + 1;
      let message = `Hello, ${action.message} (${count} times).`;
      return Object.assign({}, state, { count, message });

    default:
      return state;
  }
}
