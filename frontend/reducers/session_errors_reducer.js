import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session';

const sessionErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default sessionErrorReducer;
