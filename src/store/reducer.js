// reducer.js
import { UPDATE_NAME } from './actionTypes';

const initialState = {
  name: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
