import { combineReducers } from 'redux';
import petsReducer from './pets.reducer.js';
import ownersReducer from './owners.reducer.js';

const rootReducer = combineReducers({
    petsReducer,
    ownersReducer
});

export default rootReducer;