'use strict';
import types from '../constants/SampleTypes';

function sayHelloSync(message) {
  return {
    type: types.SAY_HELLO,
    message
  };
}

function sayHelloAsync(message) {
  return dispatch => {
    return Promise.resolve(dispatch(sayHelloSync(message)));
  };
}

export function sayHello(message) {
  return (dispatch, getState) => {
    return dispatch(sayHelloAsync(message));
  };
}
