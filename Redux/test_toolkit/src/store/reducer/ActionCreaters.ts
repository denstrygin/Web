import { IUser } from "../../model/IUser";
import { AppDispatch } from "../store";
import axios from "axios";
import { userSlice } from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit"


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await  axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(userSlice.actions.usersFetchingError("Error:(!"))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await  axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Error:(!")
        }
    }
)