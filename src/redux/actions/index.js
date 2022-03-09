import axios from "axios";

export const getDataSuccess = (item) => {
  return {
    type: "GET_DATA_SUCCESS",
    payload: item,
  };
};
export const getDataFailure = (error) => {
  return {
    type: "GET_DATA_FAILURE",
    payload: error,
  };
};

export const getData = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const data = response.data;
        dispatch(getDataSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getDataFailure(errorMsg));
      });
  };
};
