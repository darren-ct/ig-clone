import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import { useEffect } from 'react';



import { useSelector,useDispatch } from 'react-redux';
import {userActions} from './slices/user';

import Header from "./components/main/Header"

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import NewPassword from "./pages/auth/NewPassword";
import Reset from "./pages/auth/Reset";

import Settings from "./pages/Settings";
import Chat from "./pages/Chat";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Suggestions from "./pages/Suggestions"

import Profile from "./pages/Profile";


function App() {
  const user = useSelector(state => state.user);
  const token = user ? user.token : null;


  const dispatch = useDispatch();

  //  UseEffect
  useEffect(()=>{
    const userInfo =  JSON.parse(localStorage.getItem("user"));
    if(!userInfo) return;
    dispatch(userActions.login(userInfo))
  },[]);

  useEffect(()=>{
    if(user){
      // save token to localstorage
      localStorage.setItem("user",JSON.stringify(user));
    }
  },[user]);

  return (
    <div className="App">
          <BrowserRouter>
                {token && <Header/>}
                <Routes>
                     <Route path='/signup' element={!token ? <Signup/> : <Navigate to="/"/>} />
                     <Route path='/login' element={!token ? <Login/> : <Navigate to="/"/>} />
                     <Route path='/newpassword' element={token ? <NewPassword/> : <Navigate to="/signup"/>} />
                     <Route path='/reset' element={!token ? <Reset/> : <Navigate to="/"/>}/>

                     <Route path='/' element={token ? <Home/> : <Navigate to="/signup"/>} />
                     <Route path='/suggestions' element={token ? <Suggestions/> : <Navigate to="/signup"/>} />
                     <Route path='/explore' element={token ? <Explore/> : <Navigate to="/signup"/>} />
                     <Route path='/settings' element={token ? <Settings/> : <Navigate to="/signup"/>}/>
                     <Route path='/profile/:id' element={token ? <Profile/> : <Navigate to="/signup"/>} />
                     <Route path='/dm' element={token ? <Chat/> : <Navigate to="/signup"/>}/>
                </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;

// profile/:id