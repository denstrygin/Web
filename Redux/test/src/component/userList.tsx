import React, {useEffect} from "react";
import { useActions } from "../hook/useAction";
import { useTypesSelector } from "../hook/useTypesSelector";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypesSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>{ error }</h1>
    } 

    return (
        <div>
            { users.map(user => 
                <div key={user.id}>{ user.name }</div>
            )}
        </div>
    )
}

export default UserList;