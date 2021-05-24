import { combineReducers } from 'redux';
import {systemReducer} from './systemReducer';
import { padReducer } from './padReducer';

const rootReducer = combineReducers({
  system: systemReducer,
  pad: padReducer
})

export default rootReducer;