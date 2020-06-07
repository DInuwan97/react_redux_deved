import couterReducer from './counter';
import isLoggedReducer from './isLogged';
import {combineReducers} from 'redux';
import counterReducer from './counter';

const allReducer = combineReducers({
    counter : counterReducer,
    isLogged : isLoggedReducer
})

export default allReducer;