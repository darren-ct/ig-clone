import me from '../../assets/me.jpeg'

const ChangeProfile = () => {
  return (
    <div className='d-flex flex-column'>
    
                    <div className='d-flex flex-row align-items-center justify-content-center mb-4'>
                        <img style={{borderColor:"#8e8e8e"}} src={me} width={48} height={48} className="me-4 border rounded-circle"/>
                        <div className='d-flex flex-column'>
                            <span style={{fontSize:20}}>Darren's Portfolio</span>
                            <label style={{color:"#0095f6"}} htmlFor="filein">Change profile photo</label>
                            <input type="file" id='filein' style={{opacity:0,visibility:"hidden"}}/>
                        </div>
                    </div>

                    <div className='d-flex flex-column mb-4'>
                         <span style={{fontSize:16,fontWeight:"bold"}} className="mb-1">Name</span>
                         <input type="text" className='border py-2 px-4'/>
                    </div>

                    <div className='d-flex flex-column mb-4'>
                         <span style={{fontSize:16,fontWeight:"bold"}} className="mb-1">Username</span>
                         <input type="text" className='border py-2 px-4'/>
                    </div>

                    <div className='d-flex flex-column mb-4'>
                         <span style={{fontSize:16,fontWeight:"bold"}} className="mb-1">Website</span>
                         <input type="text" className='border py-2 px-4'/>
                    </div>

                    <div className='d-flex flex-column mb-4'>
                         <span style={{fontSize:16,fontWeight:"bold"}} className="mb-1">Bio</span>
                         <textarea className='border py-2 px-4'>

                         </textarea>
                    </div>

                    <div className='d-flex flex-column mb-4'>
                         <span style={{fontSize:16,fontWeight:"bold"}} className="mb-1">Gender</span>
                         <input type="text" className='border py-2 px-4'/>
                    </div>

                    <div className='d-flex flex-row justify-content-center align-items-center'>
                         <button className='px-2 py-1 rounded me-4' style={{fontWeight:600,color:'white',background:"#0095f6"}}>Submit</button>
                         <div className='text-danger' style={{fontWeight:600,cursor:"pointer"}}>Delete my account</div>
                   </div>
    </div>
  )
}

export default ChangeProfile