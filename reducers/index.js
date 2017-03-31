import { combineReducers } from 'redux';
import Day4Reducers from './Day4Reducers';
import Day8Reducers from './Day8Reducers';


const rootReducer = combineReducers({
  state: (state = {}) => state,
  day4: Day4Reducers,
  day8: Day8Reducers,
});

export default rootReducer;
