import {useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";

import following from '../../assets/following.png'

const LogoDropdown = () => {
    const navigate = useNavigate()
    const isLogoDrop = useSelector(state => state.toggle.logoDrop);

  return (
    <div className='position-absolute d-flex flex-column align-items-start justify-content-start p-3 bg-white rounded hoverable end-0' 
      style={isLogoDrop ? 
             {top:'90%', opacity:1, boxShadow:'8px 8px 51px 0px rgba(0,0,0,0.4)', visibility:"visible", transition:'150ms linear'} :
             {top:'90%', opacity:0, transform:'translateY(-20px)', visibility:"hidden", transition:'150ms linear'}}>
         <div className='d-flex flex-row justify-content-center align-items-center'>
            <img src={following}/>
            <span className='ms-2'>Following</span>
         </div>
    </div>
  )
}

export default LogoDropdown