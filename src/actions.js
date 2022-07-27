import Axios from "axios";

export const fetchPoswts = () => async (dispatch, getState) => {
  const response = await Axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response.data);
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};
