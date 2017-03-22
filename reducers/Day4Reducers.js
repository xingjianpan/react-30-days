
const INITIAL_STATE = {
  started: false,
  start_timestamp: '',
  stop_timestamp: '',
  logs: []
};


export default (state = INITIAL_STATE, action) => {
  // console.log('action: ', action);
  switch (action.type) {
    case 'start':
      return state
    case 'stop':
      return state
    case 'reset':
      return state
    case 'log_current':
      return state
    default:
      return { ...state };
  }
};
