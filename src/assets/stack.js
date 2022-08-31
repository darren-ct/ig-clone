import React from 'react'

const Stack = () => {
  return (
    <div className='position-absolute' style={{right:16,top:14}}>
        <div style={{border:'1px solid rgba(0,0,0,.1)',width:24,height:24,background:"white",borderRadius:4,boxShadow:'8px 8px 51px 0px rgba(0,0,0,0.51)', transform: 'translate(4px,6px)'}}></div>
        <div style={{border:'1px solid rgba(0,0,0,0.1)',width:24,height:24,background:"white",borderRadius:4,boxShadow:'8px 8px 51px 0px rgba(0,0,0,0.51)',transform:'translate(0px,-24px)'}}></div>
    </div>
  )
}

export default Stack