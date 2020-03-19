//* ACTION IMPORTS *//
import {
  FETCH_DATA,
  PICK_DOG,
  REMOVE_DOG,
  CLEAR_SEARCH
} from "../actions/listActions";

//* REDUCER INITIAL STATE *//
export const initialState = {
  images: [],
  takeHome: []
};

//* REDUCER *//
export const listReducer = (state = initialState, action) => {
  // console.log("state: ", state);
  console.log("takeHome: ", state.takeHome);
  // console.log("payload: ", action.payload);
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        images: [...state.images, action.payload]
      };
    case PICK_DOG:
      if (state.takeHome.length >= 1) {
        return state;
      }
      return {
        ...state,
        takeHome: [...state.takeHome, action.payload]
      };
    case REMOVE_DOG:
      return {
        ...state,
        takeHome: []
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        images: []
      };
    default:
      return state;
  }
};
