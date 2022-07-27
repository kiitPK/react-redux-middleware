import Axios from "axios";

// export const fetchPoswts = () => async (dispatch, getState) => {
//   const response = await Axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   console.log(response.data);
//   dispatch({
//     type: "FETCH_POSTS",
//     payload: response.data,
//   });
// };

export const fetchPoswts = () => async (dispatch, getState) =>{

    dispatch({type: "FETCH_POSTS_REQUEST"})
    try{
        const response = await Axios.get("https://jsonplaceholder.typicode.com/posts")

        dispatch({type: "FETCH_POSTS_SUCCESS", payload: response.data})
    }catch(error){
        dispatch({type: "FETCH_POSTS_FAILURE", error})
    }

}



