import { combineReducers } from 'redux';
import { allContactsReducer } from "./allContactsReducer";

const allReducers = combineReducers({
    allContacts: allContactsReducer
})

export default allReducers;