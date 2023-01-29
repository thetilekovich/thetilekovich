import { ADD_EMAIL,ADD_NAME, ADD_JOB, ADD_NEW_COMMENT } from "../actions"

const initialState = {
    comment: '',
    name: '',
    job: '',
    email: '',
}

export const CommentInputReducer = (state = initialState, action: {type: string, payload: ''}) => {
    switch(action.type){
        case ADD_NEW_COMMENT: {
            return {...state, comment: action.payload}
        }
        case ADD_NAME: {
            return {...state, name: action.payload}
        }
        case ADD_JOB: {
            return {...state, job: action.payload}
        }
        case ADD_EMAIL: {
            return {...state, email: action.payload}
        }
        default: {
            return state
        }
    }
}