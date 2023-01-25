import { applyMiddleware, combineReducers, createStore } from "redux";
import { ModeReducer } from "./stores/ModeReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { InputReducer } from "./stores/InputReducer";
import { ChatReducer } from "./stores/ChatReducer";
import { UserReducer } from "./stores/UserReducer";


const rootReducer = combineReducers({
    mode: ModeReducer,
    inputValue: InputReducer,
    chatData: ChatReducer,
    userData: UserReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))