const initailState = {
  products: [],
};

const productReducer = (state = initailState, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        products: action.payload,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default productReducer;
