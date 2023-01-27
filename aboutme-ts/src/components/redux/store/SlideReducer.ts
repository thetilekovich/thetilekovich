import { IAction } from "../../types"
import { NEXT_SLIDE, PREV_SLIDE } from '../actions/index';
import img1 from '../../../assets/Images/comment.png'
import img2 from '../../../assets/Images/homeimg.png'

const initialState = {
    count: 0,
    comments: [
        {
            id: 0,
            image: img1,
            comment: 'Izat is a profesional worker who always gives resuslts that are beyond our expectacions, thanks for your services',
            name: 'Jasmin',
            job: 'Businessman',
        },
        {
            id: 1,
            image: img2,
            comment: 'Izat is a profesional worker who always gives resuslts that are beyond our expectacions, thanks for your services',
            name: 'Jack',
            job: 'Businessman',
        }
    ]
}

export const SlideReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case NEXT_SLIDE: {
            return { ...state, count: state.comments.length - 1 === state.count ? state.count : state.count + 1}
        }
        case PREV_SLIDE: {
            return { ...state, count: state.count === 0 ? state.count : state.count - 1 }
        }
        default:
            return state
    }
}