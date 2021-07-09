const initailState = {
  cartItems: [],
};

const cartReducer = (state = initailState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
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

export default cartReducer;
