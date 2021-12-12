import { combineReducers } from 'redux';
import { allContactsReducer } from "./allContactsReducer";
import { newContactsReducer } from './newContactsReducer';

const allReducers = combineReducers({
    allContacts: allContactsReducer,
    newContact : newContactsReducer
})

export default allReducers;