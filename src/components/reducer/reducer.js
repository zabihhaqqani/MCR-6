export const dataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CUISINE":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
