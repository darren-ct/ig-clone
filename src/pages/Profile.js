import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import {listActions} from "../slices/list";

import List from "../components/modal/List";

import setting from '../assets/settings.png'
import grid from '../assets/grid.png'
import save from '../assets/save.png'

// Dummy
import me from "../assets/me.jpeg"
import daniel from "../assets/dummies/daniel-dummy.jpeg"
import baby from "../assets/dummies/baby-dummy.jpeg"
import sleepy from "../assets/dummies/sleepy-dummy.jpeg"
import dog from "../assets/dummies/doggy-dummy.jpeg"
import chris from "../assets/dummies/cb-dummy.jpeg"
import china from "../assets/dummies/yummy-dummy.jpeg"
import Post from "../components/main/Post"


const items = [
  {image:daniel,likes:12,comments:12,isMultiple:true},
  {image:sleepy,likes:0,comments:1,isMultiple:false},
  {image:baby,likes:1222,comments:123,isMultiple:false},
  {image:dog,likes:2,comments:0,isMultiple:false},
  {image:china,likes:133,comments:12,isMultiple:true},
  {image:chris,likes:133,comments:12,isMultiple:true},
];

const items2 = [
  {
    image : daniel,
    title : "Daniel"
  },
  {
    image : baby,
    title : "Baby Darren"
  },    
  {
    image : dog,
    title : "Twinsi again"
  },
  {
    image : dog,
    title : "Twinsi"
     },
  {
    image : chris,
    title : "chrisBrown"
  },
  {
    image : china,
    title : "Anak Cina"
  },
];

const Profile = () => {
  const navigate = useNavigate();
  
  const isMyProfile = true;

  // States
  const [filter,setFilter] = useState("posts");
  const [content,setContent] = useState(null);
  const [modal,setModal] = useState(false);


  // useEffects
  useEffect(()=>{
      getPosts();
  },[filter])

  useEffect(()=>{
       if(content) setModal(true)
  },[content])

  useEffect(()=>{
    getProfile();
  },[])

  // Functions
  const getPosts = async() => {

  };

  const getProfile = async() => {

  };

  return (
    <div className='container-lg d-flex flex-column align-items-start p-4'>
        {modal && content ? <List content={content} setModal={setModal}/> : ""}

        {/* Profile */}
          <div className='d-flex flex-row align-items-center pt-4 mb-4'>
               <img src={me} style={{width:180,height:180,borderRadius:'100vw',border:"1px solid #efefef", margin:"0 160px"}}/>

               <div className='d-flex flex-column'>
                    <div className='d-flex flex-row align-items-start mb-4'>
                         <span style={{fontSize:28,fontWeight:400}}>darrens_portfolio</span>

                         {isMyProfile ? 
                         <>
                         <button className="ms-4 me-4 border py-1 px-2 rounded bg-transparent" style={{borderColor:'#efefef'}} onClick={()=>{navigate("/settings")}}>Edit profile</button> 
                         <img src={setting} width={24} style={{cursor:"pointer"}} onClick={()=>{navigate("/settings")}}/>
                         </> :

                         <>
                         <button className="ms-4 border py-1 px-2 rounded bg-transparent" style={{borderColor:'#efefef',fontWeight:600}} onClick={()=>{navigate("/settings")}}>Message</button> 
                         <button className="ms-2 border py-1 px-4 rounded text-white" style={{background:'#0095f6',fontWeight:600}}>Follow</button>
                         </>
                         }
                         
                    </div>

                    <div className='d-flex flex-row align-items-center mb-4'>
                        <span style={{fontSize:16,cursor:"pointer"}}><b>18</b> posts</span>
                        <span style={{fontSize:16,cursor:"pointer"}} className="mx-4" onClick={()=>{setContent("Followers")}}><b>169</b> followers</span>
                        <span style={{fontSize:16,cursor:"pointer"}} onClick={()=>{setContent("Followings")}}><b>307</b> following</span>
                    </div>
                    
                    <span style={{fontWeight:600,fontSize:16}}>Darren's Fullstack Portfolio</span>
                    <p style={{maxWidth:400,fontSize:16}}>🇮20 y.o // SBY
                       Searching for a Full-Stack Dev. Job 👨‍💻
                       Skill : ReactJS, ExpressJS, SQL , MongoDB
                       📩 darren0208.dc@gmail.com
                    </p>
                    <a style={{fontSize:16,fontWeight:600,color:"#00376b"}}>www.linkedin.com/in/darren-christian-t</a>
               </div>

          </div>

        {/* Highlights */}
          <div style={{width:"100%"}} className='my-4'>
             <div className="d-flex flex-row align-items-center justify-contents-start">

                  {items2.map(item => 
                  <div className='d-flex flex-column align-items-center flex-shrink-0 flex-grow-0' style={{cursor:'pointer',width:"88px",marginRight:"50px"}}>
                       <img src={item.image} className='border rounded-circle mb-4' 
                       style={{borderColor:"#efefef",objectFit:"cover",width:"100%"}} height={88}/>

                       <span style={{fontSize:14,fontWeight:600}}>{item.title.slice(0,8) + "..."}</span> 
                  </div>
                  )}

             </div>
          </div>

        {/* Filter */}
          <div style={{width:"100%",borderColor:"#efefef"}} className="d-flex flex-row align-items-center justify-content-center mt-4 mb-4 border-top">
               {/* Posts */}
               <div className="d-flex flex-row align-items-center pt-4 me-4" onClick={()=>{setFilter("posts")}} 
               style={!isMyProfile ? {cursor:"pointer", marginRight:64, borderTop:"1px solid #262626"} : 
               filter === "posts" ? {cursor:"pointer", borderTop:"1px solid #262626", fontWeight: 700} : {cursor:"pointer"}}>
                   <img width={24} src={grid} />
                   <span className="ms-2">POSTS</span>
               </div>
               {/* Saved */}
              { isMyProfile && 
              <div className="d-flex flex-row align-items-center pt-4 ms-4" onClick={()=>{setFilter("saved")}} 
              style={filter === "saved" ? {cursor:"pointer", fontWeight: 700, borderTop:"1px solid #262626"} : {cursor:"pointer"}}>
                   <img width={20} src={save}/>
                   <span className="ms-2">SAVED</span>
               </div> 
              }
          </div>
        
        {/* Grid */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:16}}>
                {items.map(item => <Post item={item}/>)}
        </div>
    </div>
  )
}

export default Profile