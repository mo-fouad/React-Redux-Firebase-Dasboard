import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';

// firestoreReducer ==> to sync our firebase data with our state in the background

const rootReducer = combineReducers ({
    auth : authReducer,
    project : projectReducer,
    firestore: firestoreReducer
})

export default rootReducer
