const SAVE_STATE = "SAVE_STATE";
const LOAD_STATE = "LOAD_STATE";

const saveStateAction = (notes) => ({
  type: SAVE_STATE,
  payload: notes,
});

const loadStateAction = (notes) => ({
  type: LOAD_STATE,
  payload: notes,
});

const initialState = {
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_STATE: {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case LOAD_STATE: {
      return { ...state, notes: action.payload };
    }
    default:
      return state;
  }
};

// export const saveNotes = () => async (dispatch, getState) => {
//   const notes = getState().notes;
//   await fetch("http://localhost:4000/notes", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(notes),
//   });
//   alert("Success");
// };

export const saveState = () => async (dispatch, getState) => {
  const stateToSave = getState();
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        // State to send in here. eg. saveToState
        stateToSave,
      }),
    });
    const responseJSON = await response.json();
    console.log("State saved to DB");
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};

// export const loadNotes = () => async (dispatch, getState) => {
//   const notes = await fetch("http://localhost:4000/notes").then((res) => res.json());
//   dispatch(setNotes(notes));
// };

export const loadState = () => async (dispatch, getState) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        // State to send in here
      }),
    });
    const loadToState = response.json();
    dispatch(loadStateAction(loadToState));
    console.log("State loaded from DB");
    return;
  } catch (error) {
    console.log(error);
  }
};

// Dispatchers

// import React from "react";
// import { NewNoteInput } from "./NewNoteInput";
// import { useSelector, useDispatch } from "react-redux";
// import { loadStateAction } from "./actions";
// import { saveNotes, loadNotes } from "./loadAndSaveReducer";

// function App() {
//   const notes = useSelector((state) => state.notes);
//   const dispatch = useDispatch();

//   const onAddNote = (note) => {
//     dispatch(addNote(note));
//   };

//   const onSave = () => {
//     dispatch(saveNotes());
//   };

//   const onLoad = () => {
//     dispatch(loadNotes());
//   };
