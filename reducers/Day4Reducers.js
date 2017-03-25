
const INITIAL_STATE = {
  started: false,
  startTime: 0,
  stopTime: 0,
  logs: [],
  watingForAction: true,
  accumulatedTime: 0,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, startTime: action.payload, started: true };
    case 'stop':
      return {
        ...state,
        stopTime: action.payload,
        started: false,
        watingForAction: true,
        accumulatedTime: (action.payload - state.startTime + state.accumulatedTime),
        // logs: [...state.logs, action.payload - state.startTime],
      };
    case 'reset':
      return INITIAL_STATE;
    case 'logCurrent':
      return {
        ...state,
        logs: [...state.logs, action.payload - state.startTime + state.accumulatedTime],
        startTime: action.payload,
        accumulatedTime: 0,
      };
    default:
      return { ...state };
  }
};
