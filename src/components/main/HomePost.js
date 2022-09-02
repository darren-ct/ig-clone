import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListDots } from '@fortawesome/free-solid-svg-icons'

import List from '../modal/List';
import Post from '../modal/Post';
import Pop from '../modal/Pop';

import liked from '../../assets/like.png';
import like from '../../assets/notlike.png';
import save from '../../assets/save.png';
import saved from '../../assets/saved.png';
import send from '../../assets/send.png';
import comments from '../../assets/comments.png';
import emo from '../../assets/emo.png';


const HomePost = ({item}) => {
  const[modal,setModal] = useState(false);
  const[modal2,setModal2] = useState(false);
  const[modal3,setModal3] = useState(false);

  //Function
  return (
        <div className='d-flex flex-column bg-white border rounded py-4 mb-4'>
            {modal && <List content="Likes" setModal={setModal} id={item.post_id}/>}
            {modal2 && <Post setModal={setModal2} setModal2={setModal} id={item.post_id}/>}
            {modal3 && <Pop setModal={setModal3} id={item.post_id}/>}

            {/* Header */}
             <div className='d-flex flex-row align-items-center position-relative px-4'>
                  <img src={item.profile_image} style={{width:36,height:36,borderRadius:'100vw',border:'1px solid #efefef'}}/>
                  <span className='ms-3'>{item.username}</span>
                  <div className='position-absolute' style={{top:6,right:16,cursor:"pointer"}} onClick={()=>{setModal3(true)}}>
                      <FontAwesomeIcon icon={faListDots} />
                  </div>
             </div>
             
             {/* Image */}
             <img src={item.images[0]} className="my-2 mt-3" style={{width:"100%",height:400,objectFit:"cover"}}/>

            {/* Icons */}
             <div className='d-flex flex-row align-items-center py-3 px-4 position-relative'>
                  <img src={like} width={24} height={24} className="me-4" style={{cursor:"pointer"}}/>
                  <img src={comments} width={20} height={20} className="me-4" style={{cursor:"pointer"}} onClick={()=>{setModal2(true)}}/>
                  <img src={send} width={24} height={24} style={{cursor:"pointer"}}/>
                  <img src={save} width={20} height={20} style={{position:"absolute",right:16,top:12,cursor:"pointer"}}/>
             </div>

             {/* Others */}
             <span onClick={()=>{setModal(true)}} className='px-4' style={{fontWeight:600,marginBottom:12,cursor:"pointer"}}>{item.likes} likes</span>

             <div className='d-flex flex-row px-4'>
                <p style={{fontWeight:600}}>{item.username}</p>
                <p className='ms-3'>{item.caption}</p>
             </div>

             <div className='px-4' style={{color:'#8e8e8e',marginTop:-8,cursor:"pointer"}} onClick={()=>{setModal2(true)}}>View all {item.comments} comments</div>

             <div className='px-4' style={{fontSize:10,color:'#8e8e8e',marginTop:24,marginBottom:12}}>2 DAYS AGO</div>

             <div className='px-4' style={{width:470,height:1,background:"#efefef",marginBottom:12}}></div>

             <div className='d-flex flex-row align-items-center px-4'>
                 <img src={emo} style={{width:24,height:24,cursor:"pointer"}}/>
                 <input type="text" className='flex-fill mx-4' placeholder='Add a comment...'/>
                 <div style={{cursor:"pointer",color:"#0095f6",fontWeight:700}}>Post</div>
             </div>
        </div>
  )
}

export default HomePost