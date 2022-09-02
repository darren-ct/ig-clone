import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


import Header from "./components/main/Header"
import Landing from './pages/auth/Landing';
import Login from "./pages/auth/Login";
import NewPassword from "./pages/auth/NewPassword";
import Reset from "./pages/auth/Reset";
import Settings from "./pages/Settings";
import Chat from "./pages/Chat";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Details from './pages/Details';
import Suggestions from "./pages/Suggestions"
import Profile from "./pages/Profile";
import Saved from './pages/Saved';


function App() {
  const user = useSelector(state => state.user);
  // const user = {token:"od0ej2m"}
  const token = user ? user.token : null;

  //  UseEffect
  useEffect(()=>{
    const userInfo =  JSON.parse(localStorage.getItem("user"));
    if(!userInfo) return;
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
                     <Route path='/landing' element={!token ? <Landing/> : <Navigate to="/"/>} />
                     <Route path='/login' element={!token ? <Login/> : <Navigate to="/"/>} />
                     <Route path='/newpassword' element={token ? <NewPassword/> : <Navigate to="/landing"/>} />
                     <Route path='/reset' element={!token ? <Reset/> : <Navigate to="/"/>}/>

                     <Route path='/' element={token ? <Home/> : <Navigate to="/landing"/>} />
                     <Route path='/suggestions' element={token ? <Suggestions/> : <Navigate to="/landing"/>} />
                     <Route path='/explore' element={token ? <Explore/> : <Navigate to="/landing"/>} />
                     <Route path='/details/:id' element={token ? <Details/> : <Navigate to="/landing"/>} />
                     <Route path='/settings' element={token ? <Settings/> : <Navigate to="/landing"/>}/>
                     <Route path='/profile/:id' element={token ? <Profile/> : <Navigate to="/landing"/>} />
                     <Route path='/saved' element={token ? <Saved/> : <Navigate to="/landing"/>} />
                     <Route path='/dm' element={token ? <Chat/> : <Navigate to="/landing"/>}/>
                </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;

// profile/:id