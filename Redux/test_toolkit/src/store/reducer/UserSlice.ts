import { IUser } from "../../model/IUser"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { fetchUsers } from "./ActionCreaters"

interface IUserState {
    users: IUser[]
    isLoading: boolean
    error: string
    count: number
}

const initialState: IUserState = {
    users: [],
    isLoading: false,
    error: "",
    count: 0,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // usersFetching(state) {
        //     state.isLoading = true
        // },
        // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false
        //     state.users = action.payload
        // },
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false
        //     state.error = action.payload
        // },
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.users = action.payload
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default userSlice.reducer