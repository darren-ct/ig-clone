import { useEffect, useState } from "react";
import Comment from "../secondary/Comment";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListDots } from '@fortawesome/free-solid-svg-icons'
import liked from '../../assets/like.png';
import like from '../../assets/notlike.png';
import save from '../../assets/save.png';
import saved from '../../assets/saved.png';
import send from '../../assets/send.png';
import comments from '../../assets/comments.png';
import emo from '../../assets/emo.png';
import cross from '../../assets/white-cross.svg';

// DUMMY 
import me from '../../assets/me.jpeg';
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


const Post = ({setModal,setModal2}) => {
  // States
  const[detail,setDetail] = useState(null);

  //useEffects
  useEffect(()=>{getDetails()},[])

  useEffect(()=>{
    document.body.classList.add('hide-scroll')

    return ()=>{
      document.body.classList.remove('hide-scroll')
    }
  },[])

  // Functions
  const ignore = (e) => {
    e.stopPropagation()
  };

  const close = () => {
    setModal(false)
  };

  const getDetails = async() => {

  };

  return (
    <div className="position-fixed d-flex align-items-center justify-content-center" 
    style={{zIndex:200,left:0,top:0,width:"100vw",height:"100vh",background:"rgba(0,0,0,.8)"}} 
    onClick={close}>

        {/* Cross */}
        <img src={cross} className="position-fixed" style={{zIndex:201,top:16,right:16,cursor:"pointer"}}/>
     
        {/* White Box */}
          <div className="d-flex flex-row rounded bg-white position-relative" style={{width:900,height:540,overflow:"hidden"}} onClick={ignore}>
               <div style={{width:'55%'}}>
                   <img style={{width:"100%",height:"100%",objectFit:"cover"}} src={me}/>
               </div>

               <div className="d-flex flex-column border-start" style={{width:'45%',borderColor:"#efefef"}}>
                    {/* Head */}
                    <div className="d-flex flex-row align-items-center border-bottom p-3" style={{borderColor:"#efefef"}}>
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
                        <div className="mt-2" style={{cursor:"pointer"}} onClick={()=>{setModal(false);setModal2(true)}}>Liked by <b>30 others</b></div>
                        <div style={{fontSize:10,color:"#8e8e8e",fontWeight:300}}>4 hours ago</div>
                    </div>

                   {/* Comment */}
                    <div className="d-flex flex-row align-items-center p-3">
                        <img src={emo} style={{width:24,height:24,cursor:"pointer"}}/>
                        <input type="text" className='flex-fill mx-4' placeholder='Add a comment...'/>
                        <div style={{cursor:"pointer",color:"#0095f6",fontWeight:700}}>Post</div>
                   </div>

               </div>
          </div> 
          
    </div>
  )
}

export default Post