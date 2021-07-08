import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import Login from './Login';
import { loginToApp, logoutToApp, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // Login
        dispatch(
          loginToApp({
            email : userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL 
          })
        )
      }else{
        // Logout
        dispatch(logoutToApp())
      }
    }) 
    // eslint-disable-next-line
  },[])

  return (
    <div className="app">
      {!user ? (
        <Login />
      ): (
        <>
        <Header />
        <div className="app__body">
          <SideBar />
          <Feed />
        </div>
        </>
      )}

    </div>
  );
}

export default App;
