const filmReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_FILMS': {
      return state.push([action.payload]);
    }

    default:
      return state;
  }
};
export default filmReducer;
