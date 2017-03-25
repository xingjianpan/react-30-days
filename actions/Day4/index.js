export const startClock = () => {
  return {
    type: 'start',
    payload: Date.now(),
  };
};

export const stopClock = () => {
  return {
    type: 'stop',
    payload: Date.now(),
  };
};


export const resetClock = () => {
  return {
    type: 'reset',
  };
};

export const logCurrent = () => {
  return {
    type: 'logCurrent',
    payload: Date.now(),
  };
};

export const setTimer = (timerId) => {
  return {
    type: 'setTimer',
    payload: timerId,
  };
};

export const startTick = () => {
  return {
    type: 'startTick',
    payload: Date.now(),
  };
};



