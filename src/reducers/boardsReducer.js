import { CONSTANTS } from "../actions";

// Todo - make functionality to delete boards
// Todo - make functionality to edit boards

const initialState = {
  "board-0": {
    id: "board-0",
    lists: ["list-0"],
    title: "myboard",
  },
};

// This reducer returns to state an object with a new list appended to board.lists.
// The new list is named with an id number generated by uuid

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const { boardID, id } = action.payload;
      const board = state[boardID];
      const newListID = `list-${id}`;
      const newLists = [...board.lists, newListID];
      board.lists = newLists;

      console.log(`List ID added : ${newListID}`);
      console.log(`New board.lists : ${board.lists}`);
      // console.log(`New State : ${JSON.stringify({ ...state, [boardID]: board })}`);

      return { ...state, [boardID]: board };
    }

    // This reducer returns to state a reordered board.lists when lists are dragged and dropped on the UI

    case CONSTANTS.DRAG_HAPPENED: {
      const { boardID } = action.payload;
      const board = state[boardID];
      const lists = board.lists;
      const {
        droppableIndexEnd,
        droppableIndexStart,

        type,
      } = action.payload;

      // If the lists have been rearranged, splice the element from the index it was taken from to the index it was dropped to.
      // Return the state with the rearranged board.lists

      if (type === "list") {
        const pulledOutList = lists.splice(droppableIndexStart, 1);
        lists.splice(droppableIndexEnd, 0, ...pulledOutList);
        board.lists = lists;

        console.log(`List ID moved : ${pulledOutList}`);
        console.log(`New board.lists : ${board.lists}`);
        // console.log(`New State : ${JSON.stringify({ ...state, [boardID]: board })}`);

        return { ...state, [boardID]: board };
      }
      return state;
    }

    // This reducer returns to state an object with the list corresponding to listID removed

    case CONSTANTS.DELETE_LIST: {
      const { listID, boardID } = action.payload;
      const board = state[boardID];
      const lists = board.lists;
      const newLists = lists.filter((id) => id !== listID);
      board.lists = newLists;

      console.log(`List ID deleted : ${listID}`);
      console.log(`New board.lists : ${board.lists}`);
      // console.log(`New State: ${JSON.stringify({ ...state, [boardID]: board })}`);

      return { ...state, [boardID]: board };
    }

    // This reducer returns to state an object with a new board appended.
    // The new board is named with an id number generated by uuid

    case CONSTANTS.ADD_BOARD: {
      const { title, id } = action.payload;
      const newID = `board-${id}`;
      const newBoard = {
        id: newID,
        title,
        lists: [],
      };

      console.log(`Board ID added : ${JSON.stringify({ newID })}`);
      // console.log(`New state : ${JSON.stringify({ state })}`);

      return { ...state, [newID]: newBoard };
    }

    default:
      return state;
  }
};

export default boardsReducer;
