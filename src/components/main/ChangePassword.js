import me from '../../assets/me.jpeg'

const ChangePassword = () => {
  return (
    <div className='d-flex flex-column'>
    
                    <div className='d-flex flex-row align-items-center justify-content-center mb-4'>
                        <img style={{borderColor:"#8e8e8e"}} src={me} width={48} height={48} className="me-4 border rounded-circle"/>
                        <span style={{fontSize:20}}>Darren's Portfolio</span>
                    </div>

                    <div className='d-flex flex-column mb-4'>
                         <span style={{fontSize:16,fontWeight:"bold"}} className="mb-1">Old Password</span>
                         <input type="text" className='border py-2 px-4'/>
                    </div>

                    <div className='d-flex flex-column mb-4'>
                         <span style={{fontSize:16,fontWeight:"bold"}} className="mb-1">New Password</span>
                         <input type="text" className='border py-2 px-4'/>
                    </div>

                    <div className='d-flex flex-column mb-4'>
                         <span style={{fontSize:16,fontWeight:"bold"}} className="mb-1">Reenter New Password</span>
                         <input type="text" className='border py-2 px-4'/>
                    </div>

                    <div className='d-flex flex-row justify-content-center align-items-center'>
                         <button className='px-2 py-1 rounded me-4' style={{fontWeight:600,color:'white',background:"#0095f6"}}>Change password</button>
                         <div style={{color:"#0095f6",fontWeight:600,cursor:"pointer"}}>Forget password</div>
                   </div>

    </div>
  )
}

export default ChangePassword