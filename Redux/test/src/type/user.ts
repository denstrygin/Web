import { AnyAction } from "redux"

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export type UserAction = IFetchUserAction | IFetchUserSuccessAction | IFetchUserErrorAction

interface IFetchUserAction {
    type: UserActionTypes.FETCH_USERS 
}

interface IFetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

interface IFetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string 
}

export interface IUserState {
    users: any[]
    loading: boolean
    error: null | string
}
