import { FETCH_DATA, UPDATE_DATA } from "../actions/listActions";

// * REDUCER * //
export const initialState = {
  images: []
};

export const listReducer = (state = initialState, action) => {
  console.log("state: ", state);
  // console.log("payload: ", action.payload);
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        images: [...state.images, action.payload]
      };
    default:
      return state;
  }
};
