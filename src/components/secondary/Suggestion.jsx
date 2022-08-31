import React from 'react'

const Suggestion = ({item}) => {
  return (
    <div className='d-flex flex-row align-items-center mb-3 position-relative'>
          <img src={item.image} width={32} height={32} className='rounded-circle border' style={{borderColor:"#8e8e8e"}}/>
          <div className='d-flex flex-column ms-4'>
                <span style={{fontWeight:600}}>{item.username}</span>
                <span style={{color:"#8e8e8e",fontSize:12}}>Followed by {item.connection_name} + {item.connection_number} more</span>
          </div>

          <p className='position-absolute' style={{color:"#0095f6",fontSize:12,fontWeight:600,right:0,top:'50%',transform:"translateY(-50%)",cursor:"pointer"}}>{item.button}</p>
    </div>
  )
}

export default Suggestion