const ChatBody = ({item}) => {
  return (
    <div className='d-flex flex-row align-items-center p-4' style={{cursor:'pointer'}}>
         <img src={item.image} style={{width:64,height:64,border:'1px solid #efefef',borderRadius:'100vw'}}/>

         <div className='d-flex flex-column mx-4 flex-1 flex-fill'>
             <span style={!item.isRead ? {fontWeight:600} : {fontWeight:400}}>{item.username}</span>
             <span>
                  <span style={!item.isRead ? {fontWeight:600} : {fontWeight:400}}>{item.last_message}</span>
                  <span className='mx-1'>-</span>
                  <span style={{color:'#8e8e8e'}}>{item.last_sent}</span>
             </span>
         </div>

         {item.isRead ? "" : <div style={{borderRadius:'100vh',width:12,height:12,background:'#0095f6',borderRadius:'100vw'}}></div>}
    </div>
  )
}

export default ChatBody