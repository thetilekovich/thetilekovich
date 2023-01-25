import { INPUT_CHANGE } from "../actions"

const initialState = {
    inputValue: ''
}

export const InputReducer = (state = initialState, action) => {
    switch(action.type){
        case INPUT_CHANGE: {
            return {...state, inputValue: action.payload}
        }
        default: 
            return state
    }
}