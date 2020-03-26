import axios from "axios";

//* ACTIONS *//
export const FETCH_DATA = "FETCH_DATA";
export const PICK_DOG = "PICK_DOG";
export const REMOVE_DOG = "REMOVE_DOG";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

//* ACTION CREATORS *//
export const fetchData = () => dispatch => {
  axios
    .get("https://dog.ceo/api/breed/doberman/images/random")
    .then(result => {
      // console.log(result.data.message);
      dispatch({
        type: FETCH_DATA,
        payload: result.data.message
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const takeHomeDog = clickedDog => {
  return {
    type: PICK_DOG,
    payload: clickedDog
  };
};

export const removeDog = () => {
  return {
    type: REMOVE_DOG
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  };
};
