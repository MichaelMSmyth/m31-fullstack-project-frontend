import { CONSTANTS } from "../actions";

const initialState = {
  "card-0": {
    text: "Last Episode",
    id: `card-0`,
    list: "list-0",
  },
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    // This reducer returns to state an object with a new card appended
    // The new card is named with an id number generated by uuid

    case CONSTANTS.ADD_CARD: {
      const { text, listID, id } = action.payload;

      const newCard = {
        text,
        id: `card-${id}`,
        list: listID,
      };

      console.log(`Card ID added : card-${id} to list-${listID}`);
      // console.log("New State : " + JSON.stringify({ ...state, [`card-${id}`]: newCard }));

      return { ...state, [`card-${id}`]: newCard };
    }

    // This reducer returns to state an object with a new card.text value

    case CONSTANTS.EDIT_CARD: {
      const { id, newText } = action.payload;
      const card = state[id];
      card.text = newText;

      console.log("Card ID edited : " + JSON.stringify(card));
      console.log(`Card text changed to : ${card.text}`);
      // console.log("New State : " + JSON.stringify({ ...state, [`card-${id}`]: card }));

      return { ...state, [`card-${id}`]: card };
    }

    // This reducer returns to state an object after the card with the payload.id has been deleted

    case CONSTANTS.DELETE_CARD: {
      const { id } = action.payload;
      const newState = state;
      delete newState[id];

      console.log(`Card ID deleted : ${id}`);
      // console.log("New State : " + JSON.stringify(newState));

      return newState;
    }
    default:
      return state;
  }
};

export default cardsReducer;
