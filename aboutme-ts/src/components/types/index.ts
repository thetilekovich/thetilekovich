export interface IModeReducer {
    mode: boolean
}

export interface IComment {
    id: number,
    image?: string,
    comment: string,
    name: string,
    job: string,
    [key: string] : any
}

export interface IAction {
    type: string,
    payload: any
}



export interface ILanguage{
    language: string
}