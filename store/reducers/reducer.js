import {INCREMENT, DECREMENT, RESET} from '../actions/action';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
