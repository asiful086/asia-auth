const initailState = {
  user: null,
};

const userReducer = (state = initailState, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("token", JSON.stringify(action.payload.token));

      return {
        ...state,
        user: action.payload.user,
      };
    }

    case "LOGOUT": {
      localStorage.removeItem("token");

      return {
        ...state,
        user: null,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
