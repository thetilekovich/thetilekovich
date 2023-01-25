import {applyMiddleware, combineReducers, createStore} from 'redux'
import { ModeReducer } from './store/ModeReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    mode: ModeReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))