import { useState } from "react"

import unlike from "../../assets/like.png"

// Dummy
import me from "../../assets/me.jpeg"

const Comment = ({item}) => {
  const[reply,setReply] = useState(false);

  return (
    <div className='d-flex flex-column pt-4 ps-4 pe-4'>
        {/* Main */}
        <div className='d-flex flex-row justify-content-between' style={{width:'100%'}}>
            <img src={me} width={28} height={28} className="rounded-circle me-4" 
            style={{cursor:"pointer",border:"1px solid #efefef"}}/>
             
            <div className='flex-fill d-flex flex-column'>
                 <div className=''><b className="me-3">{item.username}</b>{item.body}</div>
                 <div className='d-flex flex-row mt-2 align-items-center'>
                      <span className="me-3" style={{color:"#8e8e8e",fontWeight:300,fontSize:12}}>{item.time}</span>
                      <span className="me-3" style={{color:"#8e8e8e",fontWeight:600,fontSize:12}}>{item.likes} likes</span>
                      <span color={{color:"#8e8e8e",fontWeight:600,fontSize:12}}>Reply</span>
                 </div>
            </div>

             <img src={unlike} width={16} height={16}/>
        </div>

        {/* Line etc*/}
        <div className='d-flex flex-row align-items-center mt-4 mb-4' style={{cursor:"pointer",marginLeft:48}} onClick={()=>{setReply(prev => !prev)}}>
            { !reply  && <div style={{width:50,height:1,background:"#8e8e8e"}}></div> }
            <div className="ms-3">{!reply ? `View replies (${item.replies.length})` : "Hide replies"}</div>
        </div>

        {/* Replies */}
        { reply && <div className='d-flex flex-column' style={{marginLeft:48}}>
              {item.replies.map(reply => (
                <div className='mb-3 d-flex flex-row justify-content-between' style={{width:'100%'}}>
                    <img src={me} width={28} height={28} className="rounded-circle me-4" 
                    style={{cursor:"pointer",border:"1px solid #efefef"}}/>
             
                    <div className='flex-fill d-flex flex-column'>
                        <div className=''><b className="me-3">{reply.username}</b>{reply.body}</div>
                        <div className='d-flex flex-row mt-2 align-items-center'>
                           <span className="me-3" style={{color:"#8e8e8e",fontWeight:300,fontSize:12}}>{reply.time}</span>
                           <span className="me-3" style={{color:"#8e8e8e",fontWeight:600,fontSize:12}}>{reply.likes} likes</span>
                           <span color={{color:"#8e8e8e",fontWeight:600,fontSize:12}}>Reply</span>
                        </div>
                    </div>

                    <img src={unlike} width={16} height={16}/>
                </div>
              ))}
        </div> }
    </div>
  )
}

export default Comment