import axios from "axios";

// * ACTIONS * //
export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DATA = "UPDATE_DATA";

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
