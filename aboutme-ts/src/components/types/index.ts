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