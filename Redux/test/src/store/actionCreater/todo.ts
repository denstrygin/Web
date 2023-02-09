import { TodoAction, TodoActionTypes } from "../../type/todo"
import { Dispatch } from "redux"
import axios from "axios"

export const fetchTodos = (page: number = 1, limit: number = 1) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: "Error was happen:(!"})
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}