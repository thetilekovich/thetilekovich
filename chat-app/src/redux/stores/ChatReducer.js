import { ADD_DATA } from "../actions"

const initialState = {
    chatData: []
}

export const ChatReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_DATA: {
            return {...state, chatData: action.payload}
        }
        default:
            return state
    }
}