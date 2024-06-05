// quoteReducers.js
const initialState = {
  flag: 1, // Set your initial flag value here
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FLAG":
      return {
        ...state,
        flag: action.payload,
      };
    default:
      return state;
  }
};

export default quoteReducer;
