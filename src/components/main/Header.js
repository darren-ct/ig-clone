import {useLocation,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {toggleActions} from '../../slices/toggle'

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

   const isLogoDrop = useSelector(state => state.toggle.logoDrop);
   const isSearchDrop = useSelector(state => state.toggle.searchDrop);
   const isLikesDrop = useSelector(state => state.toggle.likesDrop);
   const isPostModal = useSelector(state => state.toggle.postModal);
   const isIconDrop = useSelector(state => state.toggle.iconDrop);


  return (
  <div style={{borderColor:"#8e8e8e"}} className='border-bottom'>
    <div className='container-lg d-flex flex-row justify-content-between align-items-center ps-4 pe-4'>
         <div style={{cursor:"pointer"}}>
            <img src={logo} height={64} className='me-2'/>
            <FontAwesomeIcon icon={faCaretDown} color='grey'/>
         </div>

         <div className='d-flex flex-row'>
              <div className='position-relative'>
                  <div className='position-absolute top-50 translate-middle-y' style={{left:12}}>
                      <FontAwesomeIcon icon={faSearch} size="1x" color='#8e8e8e' />
                  </div>
                  <input type="text" placeholder='Search' className='py-2 rounded' style={{backgroundColor:"#efefef",color:"#8e8e8e",paddingLeft:40}}/>
              </div>

              <div className='d-flex flex-row align-items-center' style={{marginLeft:96}}>
                   <div style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}>
                        {path === "/" ? <FontAwesomeIcon icon={faHome} size="xl" /> : <img src={home} width={26}/> }
                   </div>
                   <div className='ms-4' style={{cursor:"pointer"}} onClick={()=>{navigate("/dm")}}> 
                       {path === "/dm" ? <FontAwesomeIcon icon={faMessage} size="xl" /> : <img src={chat} width={24} height={30}/>}
                   </div>
                   <div className='ms-4' style={{cursor:"pointer"}}>
                       <img src={add} width={24}/>
                       {/* <FontAwesomeIcon icon={faPlusSquare} size="xl" /> */}
                   </div>
                   <div className='ms-4' style={{cursor:"pointer"}} onClick={()=>{navigate("/explore")}}>
                     {path === "/explore" ? <FontAwesomeIcon icon={faCompass} size="xl" /> : <img src={compass} width={24}/>}
                   </div>
                   <div className='ms-4' style={{cursor:"pointer"}}>
                       <img src={unlike} width={24}/>
                      {/* <FontAwesomeIcon icon={faHeart} size="xl" /> */}
                   </div>
                   <img src={me} width={28} height={28} className="rounded-circle border ms-4" style={{cursor:"pointer",borderColor:"#8e8e8e"}}/>
              </div>
         </div>
    </div>
  </div>
  )
}

export default Header