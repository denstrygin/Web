import { useEffect } from 'react';
import './App.css';
import PostContainer from './component/PostContainer';
import PostContainer2 from './component/PostContainer2';
import { useAppDispatch, useAppSelector } from './hook/redux';
import { fetchUsers } from './store/reducer/ActionCreaters';
import { userSlice } from './store/reducer/UserSlice';

function App() {
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  // const {} = userSlice.actions
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <div className="App">
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <div style={{display: "flex"}}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;
