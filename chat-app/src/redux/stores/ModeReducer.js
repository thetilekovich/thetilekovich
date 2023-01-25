import { MODE_CHANGE } from "../actions"

const initialState = {
    mode: JSON.parse(localStorage.getItem('mode')) || false
}

export const ModeReducer = (state =initialState, action) => {
switch(action.type){
    case MODE_CHANGE: {
        localStorage.setItem('mode', JSON.stringify(!state.mode))
        return {...state, mode: !state.mode}
    }
    default:
        return state
}
}