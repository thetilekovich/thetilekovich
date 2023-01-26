import {applyMiddleware, combineReducers, createStore} from 'redux'
import { ModeReducer } from './store/ModeReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { MenuReducer } from './store/MenuReducer';


const rootReducer = combineReducers({
    mode: ModeReducer,
    menu: MenuReducer,
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))