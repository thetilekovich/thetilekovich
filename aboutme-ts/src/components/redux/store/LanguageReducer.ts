import { ILanguage } from "../../types"
import { CHANGE_LANGUAGE } from "../actions"

const initialState: ILanguage = {
    language: 'ru'
}

export const LanguageReducer = (state =initialState, action: {type: string}) => {
    switch(action.type){
        case CHANGE_LANGUAGE: {
            return {...state, language: state.language === 'ru' ? 'en' : 'ru'}
        }
        default: {
            return state
        }
    }
}