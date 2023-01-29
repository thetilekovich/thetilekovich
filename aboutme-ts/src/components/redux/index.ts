import {applyMiddleware, combineReducers, createStore} from 'redux'
import { ModeReducer } from './store/ModeReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { MenuReducer } from './store/MenuReducer';
import { SlideReducer } from './store/SlideReducer';
import { LanguageReducer } from './store/LanguageReducer';
import { IComment } from '../types';
import { CommentInputReducer } from './store/CommentInputReducer';


const rootReducer = combineReducers({
    mode: ModeReducer,
    menu: MenuReducer,
    slide: SlideReducer,
    language: LanguageReducer,
    comment: CommentInputReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))