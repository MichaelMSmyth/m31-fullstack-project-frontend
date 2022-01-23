import { CONSTANTS } from "../actions";

// This reducer returns to state an array of board id numbers.
// Todo - Stretch - write reducers to allow boards to be moved.

const initialState = ["board-0"];

const boardOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD: {
      console.log(`Board ID added : board-${action.payload.id}`);
      // console.log(`New State: ${state} board-${action.payload.id}`);

      return [...state, `board-${action.payload.id}`];
    }
    default:
      return state;
  }
};

export default boardOrderReducer;
