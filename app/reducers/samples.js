'use strict';
import types from '../constants/SampleTypes';

const initialState = {
  isFile: false,
  isDir: false,
  data: 'none'
};

export default function samples(state = initialState, action) {
  let isFile;
  let isDir;
  let data;
  switch (action.type) {
    case types.GOT_FILE:
      isFile = true;
      isDir = false;
      data = action.data;
      return Object.assign({}, state, { isFile, isDir, data });

    case types.GOT_DIR:
      isFile = false;
      isDir = true;
      data = action.data;
      return Object.assign({}, state, { isFile, isDir, data });

    case types.GOT_OTHER:
      return initialState;

    default:
      return state;
  }
}
