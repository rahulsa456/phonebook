import { combineReducers } from 'redux';
import { allContactsReducer } from "./allContactsReducer";
import { newContactsReducer } from './newContactsReducer';
import { recentReducer } from './recentReducer';

const allReducers = combineReducers({
    allContacts: allContactsReducer,
    newContact : newContactsReducer,
    recentCalls: recentReducer
})

export default allReducers;