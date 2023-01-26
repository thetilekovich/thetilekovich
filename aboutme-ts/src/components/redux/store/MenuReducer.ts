import { SHOW_MENU } from "../actions"

const initialState = {
    showed: false
}

export const MenuReducer = (state = initialState, action: {type: string}) =>{
    switch(action.type){
        case SHOW_MENU: {
            return {...state, showed: !state.showed}
        }
        default: 
            return state
    }
}