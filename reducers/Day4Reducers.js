
const INITIAL_STATE = {
  started: false,
  startTime: '',
  stopTime: '',
  logs: [],
  watingForAction: true,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, startTime: action.payload, started: true };
    case 'stop':
      return { ...state, stopTime: action.payload, started: false, watingForAction: true };
    case 'reset':
      return INITIAL_STATE;
    case 'logCurrent':
      return state;
    default:
      return { ...state, logs: [state.logs, action.payload] };
  }
};
