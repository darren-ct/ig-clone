import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import liked from '../../assets/like.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMessage } from '@fortawesome/free-solid-svg-icons'

import Stack from '../../assets/stack'

const Post = ({item}) => {
  const navigate = useNavigate();

  const[hover,setHover] = useState(false);

  return (
    <div className='position-relative' style={{height:'28vw',cursor:"pointer"}} onClick={()=>{navigate(`/details/${item.post_id}`)}} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
        <img src={item.image} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
        {item.isMultiple && <Stack />}
        <div className='position-absolute left-0 top-0 d-flex flex-row justify-content-center align-items-center' 
        style={hover ? {width:"100%",height:"100%",background:"rgba(0,0,0,.80)",transition:"150ms linear"} : {width:"100%",height:"100%",background:"rgba(0,0,0,.80)",opacity:0,visibility:'hidden',transition:"150ms linear"}}>
               <div className='d-flex flex-row me-4 align-items-center justify-content-center'>
                   <img src={liked}/>
                   <span className='ms-4 text-white' style={{fontWeight:600}}>{item.likes}</span>
               </div>

               <div className='d-flex flex-row align-items-center justify-content-center'>
                    <FontAwesomeIcon icon={faMessage} size="xl" />
                    <span className='ms-4 text-white' style={{fontWeight:600}}>{item.comments}</span>
               </div>
        </div>
    </div>
  )
}

export default Post