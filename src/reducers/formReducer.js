export const formReducer = (state, action) => {
    switch (action.type) {
      case "ADD_BASIC_DATA":
            return { ...state, data: action.payload }
      case "ADD_AMOUNT":
        return { ...state, amount: action.payload }
      default:
        return state;
    }
  };