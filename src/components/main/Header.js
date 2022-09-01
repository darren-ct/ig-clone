import {useLocation,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {toggleActions} from '../../slices/toggle'

import LogoDropdown from '../dropdown/LogoDropdown';
import SearchDropdown from '../dropdown/SearchDropdown';
import NotificationDropdown from '../dropdown/NotificationDropdown';
import AccountDropdown from '../dropdown/AccountDropdown';
import NewPost from '../modal/NewPost';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSearch , faHome, faMessage, faPlusSquare, faHeart, faCompass  } from '@fortawesome/free-solid-svg-icons'

import me from '../../assets/me.jpeg'
import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
import chat from '../../assets/chat.png'
import add from '../../assets/add-new.png'
import compass from '../../assets/compass.png'
import unlike from '../../assets/notlike.png'


const Header = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const path = location.pathname;


   const isPostModal = useSelector(state => state.toggle.postModal);
   const isIconDrop = useSelector(state => state.toggle.iconDrop);
   const isNotificationDrop = useSelector(state => state.toggle.notifDrop)


  return (
  <div style={{borderColor:"#8e8e8e"}} className='border-bottom'>
    <div className='container-lg d-flex flex-row justify-content-between align-items-center ps-4 pe-4'>

        {/* Left Side */}
         <div style={{cursor:"pointer"}} className='position-relative' onClick={()=>{navigate("/")}}>
              <img src={logo} height={64} className='me-2'/>
              {/* <FontAwesomeIcon icon={faCaretDown} color='grey'/> */}
              {/* <LogoDropdown /> */}
         </div>

        {/* Right Side */}
         <div className='d-flex flex-row'>
             {/* Search */}
              <div className='position-relative'>
                  <div className='position-absolute top-50 translate-middle-y' style={{left:12}}>
                      <FontAwesomeIcon icon={faSearch} size="1x" color='#8e8e8e' />
                  </div>
                  <input type="text" onClick={()=>{dispatch(toggleActions.toggleSearch())}}
                  placeholder='Search' className='py-2 rounded' style={{backgroundColor:"#efefef",color:"#8e8e8e",paddingLeft:40}}/>
                  <SearchDropdown />
              </div>

              {/* Icons */}
              <div className='d-flex flex-row align-items-center' style={{marginLeft:96}}>
                   <div style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}>
                       {path === "/" ? <FontAwesomeIcon icon={faHome} size="xl" /> : <img src={home} width={26}/> }
                   </div>

                   <div className='ms-4' style={{cursor:"pointer"}} onClick={()=>{navigate("/dm")}}> 
                       {path === "/dm" ? <FontAwesomeIcon icon={faMessage} size="xl" /> : <img src={chat} width={24} height={30}/>}
                   </div>

                   <div className='ms-4'>
                       { !isPostModal ? 
                       <img src={add} width={24} style={{cursor:"pointer"}} onClick={()=>{dispatch(toggleActions.togglePost())}}/> :
                       <span style={{cursor:"pointer"}} onClick={()=>{dispatch(toggleActions.togglePost())}}> <FontAwesomeIcon icon={faPlusSquare} size="xl"/> </span>}
                       <NewPost />
                   </div>

                   <div className='ms-4' style={{cursor:"pointer"}} onClick={()=>{navigate("/explore")}}>
                       {path === "/explore" ? <FontAwesomeIcon icon={faCompass} size="xl" /> : <img src={compass} width={24}/>}
                   </div>

                   <div className='ms-4 position-relative'>
                      {!isNotificationDrop ? <img src={unlike} style={{cursor:"pointer"}} width={24} onClick={()=>{dispatch(toggleActions.toggleLikes())}}/> 
                      : <span onClick={()=>{dispatch(toggleActions.toggleLikes())}}> <FontAwesomeIcon icon={faHeart} size="xl" /> </span> }
                       <NotificationDropdown/>
                   </div>

                   <div className='position-relative' onClick={()=>{dispatch(toggleActions.toggleIcon())}}>
                       <img src={me} width={28} height={28} className="rounded-circle ms-4" 
                       style={!isIconDrop ? {cursor:"pointer",border:"1px solid #efefef",transition:"150ms ease"} : {cursor:"pointer",border:"1px solid #262626",transition:"150ms ease"}}/>
                       <AccountDropdown />
                   </div>  
              </div>

         </div>

    </div>
  </div>
  )
}

export default Header