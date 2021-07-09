import axios from "axios";

export const productFetch = () => {



  return (dispatch) => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      dispatch({
        type: "FETCH",
        payload: res.data,
      });
    });
  };
};














//   return {
//     type: "FETCH",
//     payload: data
//   };
