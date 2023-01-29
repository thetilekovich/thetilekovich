import { ILanguage } from "../../types"
import { CHANGE_LANGUAGE, SHOW_CHOSE } from "../actions"

const initialState: ILanguage = {
    language: 'en',
    showChose: false
}

export const LanguageReducer = (state =initialState, action: {type: string, payload: string}) => {
    switch(action.type){
        case CHANGE_LANGUAGE: {
            return {...state, language: action.payload}
        }
        case SHOW_CHOSE: {
            return {...state, showChose: !state.showChose}
        }
        default: {
            return state
        }
    }
}