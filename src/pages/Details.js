import { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";

import Post from "../components/main/Post";
import Comment from "../components/secondary/Comment";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListDots } from '@fortawesome/free-solid-svg-icons'


import liked from '../assets/like.png';
import like from '../assets/notlike.png';
import save from '../assets/save.png';
import saved from '../assets/saved.png';
import send from '../assets/send.png';
import comments from '../assets/comments.png';
import emo from '../assets/emo.png';


// dummy
import me from '../assets/me.jpeg';

const items = [
  {image:me,likes:12,comments:12,isMultiple:true},
  {image:me,likes:0,comments:1,isMultiple:false},
  {image:me,likes:1222,comments:123,isMultiple:false},
  {image:me,likes:2,comments:0,isMultiple:false},
  {image:me,likes:133,comments:12,isMultiple:true},
  {image:me,likes:133,comments:12,isMultiple:true},
];

const commentsitem = [
  {
    image : me,
    username : 'm.i.k_darren',
    body : 'wow so sick',
    likes : 12,
    time : '2d' ,
    replies : [
      
         {
          image : me,
          username : 'm.i.k_chris',
          body : 'AHH',
          likes : 12,
          time : '2d' 
         },

         {
          image : me,
          username : 'tj',
          body : 'wow so sick',
          likes : 12,
          time : '2s' 
         },

         {
          image : me,
          username : 'm.i.k_darren',
          body : 'WOII',
          likes : 12,
          time : '1h' 
         },

         {
          image : me,
          username : 'tj',
          body : 'wow',
          likes : 12,
          time : '1m' 
         },

      
    ]
  },

  {
    image : me,
    username : 'm.i.k_darren',
    body : 'wow so sick',
    likes : 12,
    time : '2d' ,
    replies : [
      
         {
          image : me,
          username : 'm.i.k_chris',
          body : 'AHH',
          likes : 12,
          time : '2d' 
         },

         {
          image : me,
          username : 'tj',
          body : 'wow so sick',
          likes : 12,
          time : '2s' 
         },

         {
          image : me,
          username : 'm.i.k_darren',
          body : 'WOII',
          likes : 12,
          time : '1h' 
         },

         {
          image : me,
          username : 'tj',
          body : 'wow',
          likes : 12,
          time : '1m' 
         },

      
    ]
  },

  {
    image : me,
    username : 'm.i.k_darren',
    body : 'wow so sick',
    likes : 12,
    time : '2d' ,
    replies : [
      
         {
          image : me,
          username : 'm.i.k_chris',
          body : 'AHH',
          likes : 12,
          time : '2d' 
         },

         {
          image : me,
          username : 'tj',
          body : 'wow so sick',
          likes : 12,
          time : '2s' 
         },

         {
          image : me,
          username : 'm.i.k_darren',
          body : 'WOII',
          likes : 12,
          time : '1h' 
         },

         {
          image : me,
          username : 'tj',
          body : 'wow',
          likes : 12,
          time : '1m' 
         },

      
    ]
  }
]

const Details = () => {
  const dispatch = useDispatch();

  // useEffect
  useEffect(()=>{
      getDetail();
      getPosts();
  },[])

  // Function
  const getDetail = async() => {

  };

  const getPosts = async() => {

  };

  return (
    <div className="container-lg d-flex flex-column justify-content-start align-items-center p-4">
        {/* Details */}
         <div className="d-flex flex-row bg-white border mb-4" style={{borderColor:"#efefef"}} width={600} height={600}>
             <img src={me} width="65%"/>
             <div className="d-flex flex-column border-start" width="35%" style={{borderColor:"#efefef"}}>
                 {/* Head */}
                  <div className="d-flex flex-row align-items-center border-bottom p-4" style={{borderColor:"#efefef"}}>
                       <img src={me} style={{width:36,height:36,borderRadius:'100vw',border:'1px solid #efefef'}} />
                       <span className="ms-4 flex-fill">loker.programmer<b> - Following</b></span>
                       <span style={{cursor:"pointer"}}><FontAwesomeIcon icon={faListDots}/></span>
                  </div>

                 {/* Comment */}
                 <div className="flex-fill" style={{overflowY:"scroll"}}>
                      <div className="d-flex flex-column">
                          {commentsitem.map(comment => <Comment item={comment}/>)}
                      </div>
                 </div>

                 {/* Body */}
                 <div className="border-top px-4 py-3" style={{borderColor:"#efefef"}}>
                      <div className='d-flex flex-row align-items-center position-relative'>
                         <img src={like} width={24} height={24} className="me-4" style={{cursor:"pointer"}}/>
                         <img src={comments} width={20} height={20} className="me-4" style={{cursor:"pointer"}}/>
                         <img src={send} width={24} height={24} style={{cursor:"pointer"}}/>
                         <img src={save} width={20} height={20} style={{position:"absolute",right:0,top:4,cursor:"pointer"}}/>
                      </div>
                      <div className="mt-3">Liked by <b>30 others</b></div>
                      <div style={{fontSize:10,color:"#8e8e8e",fontWeight:300}}>4 hours ago</div>
                 </div>

                 {/* Comment */}
                 <div className="d-flex flex-row align-items-center p-4">
                      <img src={emo} style={{width:24,height:24,cursor:"pointer"}}/>
                      <input type="text" className='flex-fill mx-4' placeholder='Add a comment...'/>
                      <div style={{cursor:"pointer",color:"#0095f6",fontWeight:700}}>Post</div>
                 </div>

             </div>
         </div>

         {/* Grid etc*/}
         <div style={{width:"100%",textAlign:'left'}} className="mt-4 mb-3 d-flex flex-row justify-content-start align-items-end">
             <div style={{fontWeight:600,color:"#8e8e8e"}}>More posts from</div> 
             <div className="ms-2">loker.programmer</div>
         </div>

         <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:16}}>
                {items.map(item => <Post item={item}/>)}
         </div>
    </div>
  )
}

export default Details