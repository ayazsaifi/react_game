import tickPositionReducer from './tickPostion'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
    tickPostion : tickPositionReducer
});

export default allReducer;