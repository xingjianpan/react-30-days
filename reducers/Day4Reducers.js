
const INITIAL_STATE = {
  started: false,
  startTime: null,
  stopTime: null,
  logs: [],
  accumulatedTime: 0,
  counter: 0,
  timerId: null,
  now: null,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        startTime: action.payload,
        started: true,
      };
    case 'stop':
      return {
        ...state,
        stopTime: action.payload,
        started: false,
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
        counter: state.counter + 1,
      };
    case 'setTimer':
      return {
        ...state,
        timerId: action.payload,
      };
    case 'startTick':
      return {
        ...state,
        now: action.payload,
      };
    default:
      return { ...state };
  }
};
