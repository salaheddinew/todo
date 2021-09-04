const initialState = { liste: [] };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DO IT":
      return { ...state, liste: [...state.liste, action.payload] };
    case "supr":
      let listFiltre = state.liste.filter(
        (element) => element.id !== action.payload
      );

      return { ...state, liste: [...listFiltre] };
    default:
      return state;
  }
};
export default counterReducer;
