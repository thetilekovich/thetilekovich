import { IModeReducer } from "../../types"
import { MODE_CHANGE} from "../actions"






const initialState: IModeReducer = {
    mode: false
}

export const ModeReducer = async(state = initialState, action: {type: string}) => {
    switch(action.type){
        case MODE_CHANGE: {
            return {...state, mode: !state.mode}
        }
        default:
            return state
    }
}