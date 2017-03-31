
const INITIAL_STATE = {
  counter: 0,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'tap':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'reset':
      return INITIAL_STATE;
    default:
      return { ...state };
  }
};
