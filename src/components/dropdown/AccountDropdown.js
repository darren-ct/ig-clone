import {useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";

import {userActions} from "../../slices/user"

import change from "../../assets/switch.png"
import settings from "../../assets/settings.png"
import saved from "../../assets/saved.png"
import profile from "../../assets/user.png"

const AccountDropdown = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLogoDrop = useSelector(state => state.toggle.iconDrop);

  return (
    <div className='position-absolute d-flex flex-column justify-content-start bg-white rounded hoverable end-0' 
      style={isLogoDrop ? 
             {zIndex: 120, width:200, top:'150%', opacity:1, boxShadow:'8px 8px 51px 0px rgba(0,0,0,0.4)', visibility:"visible", transition:'150ms linear'} :
             {zIndex: 120, width:200, top:'150%', opacity:0, transform:'translateY(-20px)', visibility:"hidden", transition:'150ms linear'}}>

         <div className='d-flex flex-row justify-content-start align-items-center p-3' style={{cursor:"pointer"}} onClick={()=>{navigate("/profile/1")}}>
            <img src={profile} width={24}/>
            <span className='ms-3'>Profile</span>
         </div>
         <div className='d-flex flex-row justify-content-start align-items-center p-3' style={{cursor:"pointer"}} onClick={()=>{navigate("/saved")}}>
            <img src={saved} width={24}/>
            <span className='ms-3'>Saved</span>
         </div>
         <div className='d-flex flex-row justify-content-start align-items-center p-3' style={{cursor:"pointer"}} onClick={()=>{navigate("/settings")}}>
            <img src={settings} width={24}/>
            <span className='ms-3'>Settings</span>
         </div>
         <div className='d-flex flex-row justify-content-start align-items-center p-3' style={{cursor:"pointer"}}>
            <img src={change} width={24}/>
            <span className='ms-3'>Switch Accounts</span>
         </div>
         <div className='d-flex flex-row justify-content-start align-items-center p-3 border-top'>
            <span style={{cursor:"pointer"}} onClick={()=>{dispatch(userActions.actions.logout())}}>Log Out</span>
         </div>
    </div>
  )
}

export default AccountDropdown