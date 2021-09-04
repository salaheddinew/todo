const initialState = { liste: [] };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DO IT":
      return { ...state, liste: [...state.liste, action.payload] };
    default:
      return state;
  }
};
export default counterReducer;
