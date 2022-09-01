import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'

import ChatBody from '../components/secondary/ChatBody';
import MessageBody from '../components/secondary/MessageBody';

import emo from "../assets/emo.png";
import like from "../assets/notlike.png";
import image from "../assets/image.png";
import info from '../assets/info.png'
import phone from '../assets/phone.png'
import video from '../assets/vcall.png'

// DUMMY
import me from '../assets/me.jpeg'
import daniel from "../assets/dummies/daniel-dummy.jpeg"
import baby from "../assets/dummies/baby-dummy.jpeg"
import enrico from "../assets/dummies/enrico-dummy.jpeg"
import dog from "../assets/dummies/doggy-dummy.jpeg"
import chris from "../assets/dummies/cb-dummy.jpeg"
import china from "../assets/dummies/yummy-dummy.jpeg"



const chatlist = [
    {
      image : me,
      username : "Chris",
      last_message : "Hey",
      last_sent : "21m",
      isRead : false,
    },

    {
      image : daniel,
      username : "Daniel",
      last_message : "Di Jakarta?",
      last_sent : "43m",
      isRead : true,
    },
    {
      image : dog,
      username : "Woof",
      last_message : "Woof",
      last_sent : "2m",
      isRead : false,
    },

    {
      image : enrico,
      username : "Enrico",
      last_message : "Dimana Bro",
      last_sent : "4m",
      isRead : true,
    },
    {
      image : baby,
      username : "Baby_TJ",
      last_message : "OEKKKK",
      last_sent : "21m",
      isRead : false,
    },

    {
      image : chris,
      username : "Chris",
      last_message : "Waddup chris",
      last_sent : "43m",
      isRead : true,
    },
    {
      image : china,
      username : "Mie Mie",
      last_message : "mieeeeee",
      last_sent : "21m",
      isRead : false,
    },

    {
      image : me,
      username : "darren",
      last_message : "Hey bro",
      last_sent : "43m",
      isRead : true,
    },
];

const messageList = [
  {
         image : null,
         isMe:true,
         body : "Hallo",
         replying_user: null,
         replying_body : null
  },

  {
        image : daniel,
        isMe:false,
        body : "Hallo",
        replying_user : 12,
        replying_body : "Hallo"
  },



]

const Chat = () => {
  const dispatch = useDispatch();

  // useEffect
  useEffect(()=>{
    getChats()
    getMessages()
  },[]);

  // Functions
  const getChats = async() => {

  };

  const getMessages = async() => {

  };

  return (
    <div className='container-lg p-4' style={{height:'calc(100vh - 66px)'}}>

         <div className='d-flex flex-row border bg-white' style={{borderColor:'#efefef',height:'100%'}}>
                
                {/* Chat Body */}
               <div style={{flex:4,borderColor:'#efefef'}} className='d-flex flex-column border-end' >
                    <div className='d-flex align-items-center justify-content-center pt-4 pb-4 border-bottom' style={{borderColor:'#efefef'}}>
                         <span style={{fontWeight:600,marginBottom:3}}>selftaught_tj</span>
                    </div>

                    <div style={{flex:1,overflowY:'scroll'}}>
                        <div className='flex flex-column'>
                              {chatlist.map(chat => <ChatBody item={chat} />)}
                        </div>
                    </div>
               </div>

               {/* Message Body */}
               <div style={{flex:6}} className='d-flex flex-column'>
                    <div className='d-flex align-items-center justify-content-between p-4 border-bottom' style={{borderColor:'#efefef'}}>
                         <div>
                              <img src={daniel} width={24} height={24} style={{objectFit:'cover',border:'1px solid #efefef',borderRadius:'100vh'}}/>
                              <span className='ms-2' style={{fontWeight:600}}>Daniel</span> 
                         </div>

                         <div className='d-flex flex-row align-items-center'>
                               <img src={phone} className="me-3" width={24} style={{cursor:'pointer'}}/>
                               <img src={video} className="me-3" width={24} style={{cursor:'pointer'}}/>
                               <img src={info} width={24} style={{cursor:'pointer'}}/>
                         </div>
                    </div>

                    <div style={{flex:1,overflowY:'scroll'}}>
                         <div className='flex flex-column'>
                              {messageList.map(message => <MessageBody item={message}/>)}
                         </div>
                    </div>

                    <div className='p-4'>
                       <div className='d-flex align-items-center p-2 border rounded-pill' style={{borderColor:"#efefef"}}>
                          <img src={emo} style={{width:24,height:24,cursor:"pointer"}}/>
                          <input type='text' className='flex-fill mx-4' placeholder='Message...' />
                          <img src={image} width={24} className="me-3" style={{cursor:"pointer"}}/>
                          <img src={like} width={28} style={{cursor:"pointer"}}/>
                       </div>
                    </div>
               </div>

         </div>

    </div>
  )
}

export default Chat