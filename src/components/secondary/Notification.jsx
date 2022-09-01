

const Notification = ({item}) => {
  return (
    <div className='d-flex flex-row align-items-center justify-content-between mb-2' style={{width:'100%'}}>
        <img src={item.image} width={48} height={48} className="rounded-circle me-3 border" style={{objectFit:"cover",borderColor:"#efefef",cursor:"pointer"}}/>

        <div className='flex-fill ms-3 me-1'>
            {item.action === "follow" ? `${item.username} started following you.` : 
           `${item.username} liked your post.` }

           <span className='ms-2' style={{color:'#8e8e8e',fontWeight:400,fontSize:12}}>{item.time}</span>
        </div>


        { item.action === "follow" && item.isFollowed === true ? <button className="p-2 px-4 border rounded bg-transparent" style={{borderColor:'#8e8e8e'}}>Following</button> : 
          item.isFollowed === false ? <button className="p-2 px-4 rounded text-white" style={{background:'#0095f6'}}>Follow</button> : 
          <img src={item.liked_image} className="border" style={{borderColor:'#8e8e8e',objectFit:"cover"}} width={56} height={56}/> }

    </div>
  )
}

export default Notification