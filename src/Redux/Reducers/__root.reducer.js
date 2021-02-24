import { combineReducers } from 'redux';
import petsReducer from './pets.reducer';

const rootReducer = combineReducers({
    petsReducer,
});

export default rootReducer;