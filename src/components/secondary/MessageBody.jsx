import { useState } from "react";

import emo from '../../assets/emo.png'
import more from '../../assets/more.png'
import arrow from '../../assets/curve-arrow.png'


const MessageBody = ({item}) => {

  const[onHover,setOnHover] = useState(false)
  const isMe = item.isMe;

  const renderBody = () => {
         if(isMe){
            return (
                <>
                    { onHover && <>
                    <img src={more} width={16} className="me-3" style={{cursor:"pointer"}}/>
                    <img src={arrow} width={16} className="me-3" style={{cursor:"pointer"}}/>
                    <img src={emo} width={16} className="me-3" style={{cursor:"pointer"}}/> </>
                    }
                    
                    <div className='d-flex align-items-center justify-content-center px-4 py-2 rounded-pill' style={{background:'#efefef'}}>
                         {item.body}
                    </div>
                </>
            )
         };

         return (
               <> 
                  <img src={item.image} className="rounded-circle me-2 border" style={{objectFit:'cover',width:40,height:40,borderColor:'#8e8e8e'}}/>

                  <div className='d-flex align-items-center justify-content-center px-4 py-2 rounded-pill border' style={{borderColor:'#8e8e8e'}}>
                         {item.body}
                  </div>

                { onHover && <>
                  <img src={emo} width={16} className="ms-3" style={{cursor:"pointer"}}/>
                  <img src={arrow} width={16} className="ms-3" style={{cursor:"pointer"}}/>
                  <img src={more} width={16} className="ms-3" style={{cursor:"pointer"}}/> </>}
              </>
         )
  }
  
  return (
    <>
    {item.replying_user   &&   <div className="d-flex flex-column align-items-start justify-content-start" style={{padding:"0 72px",marginBottom:"-16px"}}>
                                   <span style={{fontSize:12,color:"#8e8e8e"}}>Replied to {item.replying_user}</span>
                                         <div className="mt-2 d-flex flex-row align-items-center justify-content-start"> 
                                               <div style={{height:48,width:4,background:"#efefef"}} className="rounded me-4"></div>
                                               <div className="d-flex align-items-center justify-content-center px-4 py-2 rounded-pill" style={{background:'#efefef'}}>{item.replying_body}</div>
                                         </div>
                                </div>
    }

    <div className={`px-4 mt-4 d-flex flex-row align-items-end ${item.isMe ? "justify-content-end" : "justify-content-start"}`} onMouseEnter={()=>{setOnHover(true)}} onMouseLeave={()=>{setOnHover(false)}}>
          {renderBody()}
    </div>
    </>
  )
}


export default MessageBody

// <a href="https://www.flaticon.com/free-icons/more" title="more icons">More icons created by Alfredo Hernandez - Flaticon</a>
{/* <a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by edt.im - Flaticon</a> */}