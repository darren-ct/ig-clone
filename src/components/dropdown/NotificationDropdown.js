import {useSelector} from 'react-redux'

import Notification from '../secondary/Notification';

import me from '../../assets/me.jpeg'

const item = { 
    image : me,
    username : "m.i.k_darren",
    action : "follow",
    isFollowed:false,
    liked_image : null,
    time : "2m"
}

const item2 = { 
    image : me,
    username : "m.i.k_darren",
    action : "follow",
    isFollowed:true,
    liked_image : null,
    time : "6h"
}

const item3 = { 
    image : me,
    username : "m.i.k_darren",
    action : "like",
    isFollowed:null,
    liked_image : me,
    time : "2d"
}

const NotificationDropdown = () => {
    const isNotificationDrop = useSelector(state => state.toggle.notifDrop)

  return (
        <>

    <div className="position-absolute end-0 translate-middle bg-white" 
         style={isNotificationDrop ? {opacity:1, visibility:"visible", top:"140%", zIndex:120, width:16, height:20, clipPath:'polygon(50% 0%, 0% 100%, 100% 100%)', transition:'150ms linear'} : 
             {opacity:0, visibility:"visible", top:"140%", zIndex:120, width:16, height:20, clipPath:'polygon(50% 0%, 0% 100%, 100% 100%)', transition:'150ms linear'}}>
            
    </div>

    <div className='position-absolute end-0 d-flex flex-column align-items-start justify-content-start p-4 bg-white rounded' 
         style={isNotificationDrop ? 
             {width:520,height:300, top:"180%", zIndex:100, opacity:1, boxShadow:'8px 8px 51px 0px rgba(0,0,0,0.4)', visibility:"visible", overflowY:"scroll",transition:'150ms linear'} :
             {width:520,height:300, top:"180%", zIndex:100, transform:'translateY(-20px)', opacity:0,visibility:"hidden", overflowY:"scroll", transition:'150ms linear'}}>

            <span className='mb-2' style={{fontWeight:600}}>Today</span>

            <Notification item={item} />
            <Notification item={item} />
            <Notification item={item} />

            <span className='mt-4 mb-2' style={{fontWeight:600}}>Yesterday</span>

            <Notification item={item2} />
            <Notification item={item2} />
            <Notification item={item2} />

            <span className="mt-4 mb-2" style={{fontWeight:600}}>This week</span>

            <Notification item={item3} />
            <Notification item={item3} />
            <Notification item={item3} />
    </div>

        </>
  )
}

export default NotificationDropdown