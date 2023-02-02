import { HIDE_MENU, SHOW_MENU } from "../actions"

const initialState = {
    showed: false
}

export const MenuReducer = (state = initialState, action: {type: string}) =>{
    switch(action.type){
        case SHOW_MENU: {
            return {...state, showed: !state.showed}
        }
        case HIDE_MENU: {
            return {...state, showed: false}
        }
        default: 
            return state
    }
}