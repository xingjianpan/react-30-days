import { combineReducers } from 'redux';
import Day4Reducers from './Day4Reducers';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  day4: Day4Reducers,
});

export default rootReducer;
