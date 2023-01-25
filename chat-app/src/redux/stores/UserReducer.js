import { ADD_PASSWORD, ADD_USERNAME, SET_STATUS } from "../actions"

const initialState = {
    userName: '',
    userPassword: '',
    status: false,
}

export const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USERNAME: {
            return {...state, userName: action.payload}
        }
        case ADD_PASSWORD: {
            return {...state, userPassword: action.payload}
        }
        case SET_STATUS: {
            return {...state, status: !state.status}
        }
        default:
            return state
    }
}