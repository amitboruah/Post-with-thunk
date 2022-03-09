const initialValue = {
  data: [],
  error: "",
};

const postReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_DATA_SUCCESS":
      return {
        data: action.payload,
        error: "",
      };
    case "GET_DATA_FAILURE":
      return {
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
