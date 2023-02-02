import { IAction } from "../../types"
import { ADD_COMMENTS, NEXT_SLIDE, PREV_SLIDE } from '../actions/index';


const initialState = {
    count: 0,
    comments: []
}

export const SlideReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ADD_COMMENTS: {
            return { ...state, comments: action.payload }
        }
        case NEXT_SLIDE: {
            return { ...state, count: state.comments.length - 1 === state.count ? state.count : state.count + 1 }
        }
        case PREV_SLIDE: {
            return { ...state, count: state.count === 0 ? state.count : state.count - 1 }
        }
        default:
            return state
    }
}