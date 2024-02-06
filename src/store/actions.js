// actions.js
import { UPDATE_NAME } from './actionTypes';

export const updateName = (name) => ({
  type: UPDATE_NAME,
  payload: name,
});
