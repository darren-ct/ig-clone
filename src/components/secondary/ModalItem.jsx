import React from 'react'

const ModalItem = ({item}) => {
  return (
    <div className='px-4 py-2 d-flex flex-row align-items-center position-relative' style={{cursor:"pointer"}}>
          <img src={item.image} width={32} height={32} className='rounded-circle border' style={{borderColor:"#8e8e8e"}}/>
          <div className='d-flex flex-column flex-fill m-4'>
                <span style={{fontWeight:600}}>{item.username}</span>
          </div>

          { item.isFollowed === true ?
            <button className='px-4 py-2 border rounded' style={{backgroundColor:"white",borderColor:"#8e8e8e",fontWeight:600}}>Following</button>
          : <button className='px-4 py-2 text-white rounded' style={{backgroundColor:"#0095f6",fontWeight:600}}>Follow</button>}
    </div>
  )
}

export default ModalItem