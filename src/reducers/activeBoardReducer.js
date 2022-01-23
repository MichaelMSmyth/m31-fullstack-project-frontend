import { CONSTANTS } from "../actions";

// This reducer returns to state which board is currently active

const initialState = null;

const activeBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SET_ACTIVE_BOARD: {
      console.log(`Active board ID :  ${action.payload}`);

      return action.payload;
    }

    default:
      return state;
  }
};

export default activeBoardReducer;
