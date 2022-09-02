import {useNavigate} from 'react-router-dom';

import mockup1 from '../../assets/mockups/mockup-1.svg'
import mockup2 from '../../assets/mockups/mockup-3.svg'
import logo from '../../assets/logo.png'

const Landing = () => {
    const navigate = useNavigate();

  return (
    <>
    {/* Main */}
    <div className='d-flex flex-row justify-content-center' style={{marginTop:64,marginBottom:32}}>
          {/* Mockups */}
           <div className='d-flex flex-row' style={{marginRight:48}}>
                  <img src={mockup1} width={240} style={{transform:'translate(80%,-16px)',zIndex:-1}}/>
                  <img src={mockup2} width={240}/>
           </div>
           
           {/* Form */}
           <div className='d-flex flex-column' style={{width:360,marginRight:160}}>
             {/* Top */}
              <div className='d-flex flex-column align-items-center bg-white border' style={{padding:32}}>
                  <img src={logo} width={180} />
                  <div className='text-center my-3' style={{color:'#8e8e8e'}}>
                      Sign up to see photos and videos from your friends.
                  </div>

                  {/* Inputs */}
                  <div className='input-group mb-2 pb-2'>
                       <input type="text" placeholder='Email' className="rounded px-3 py-2" style={{border:'1px solid #efefef',width:"100%"}}/>
                  </div>

                  <div className='input-group mb-2 pb-2'>
                       <input type="text" placeholder='Full Name' className="rounded px-3 py-2" style={{border:'1px solid #efefef',width:"100%"}}/>
                  </div>

                  <div className='input-group mb-2 pb-2'>
                       <input type="text" placeholder='Username' className="rounded px-3 py-2" style={{border:'1px solid #efefef',width:"100%"}}/>
                  </div>

                  <div className='input-group mb-2 pb-2'>
                       <input type="password" placeholder='Password' className="rounded px-3 py-2" style={{border:'1px solid #efefef',width:"100%"}}/>
                  </div>

                 {/*  */}
                 <div className='text-center my-2' style={{fontSize:12,color:'#8e8e8e'}}>
                     People who use our service may have uploaded 
                     your contact information to Instagram. 
                     <b style={{fontSize:12,cursor:"pointer"}} className="ms-2">Learn More</b>
                 </div>

                 <div className='text-center my-2 mb-4' style={{fontSize:12,color:'#8e8e8e'}}>
                     By signing up, you agree to our Terms, Privacy
                     Policy and Cookies Policy
                 </div>

                 <button className='p-2 rounded' style={{width:'100%',color:"white",background:"#0095f6"}}>Sign up</button>
              </div>
              
              {/* Bottom */}
              <div className='d-flex flex-row justify-content-center bg-white mt-2 p-4 border'>
                  <div className='me-3'>Have an account?</div>
                  <div style={{color:"#0095f6",cursor:"pointer"}} onClick={()=>{navigate("/login")}}>Log in</div>
              </div>

           </div>
    </div>

    {/* Footer */}
    <div className='d-flex flex-column align-items-center' style={{marginBottom:64}}>
        <div className='d-flex flex-row align-items-center mb-2'>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Meta</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>About</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Blog</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Jobs</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Help</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>API</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Privacy</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Terms</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Top Accounts</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Hashtags</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Locations</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Instagram Lite</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Contact Uploading & Non-Users</span>
        </div>
        <div className='d-flex flex-row align-items-center mb-2'>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Dance</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Food & Drink</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Home & Garden</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Music</span>
              <span className='me-2' style={{color:"#8e8e8e",fontSize:10,cursor:"pointer"}}>Visual Arts</span>
        </div>
        <div className='d-flex flex-row align-items-center mb-2' style={{color:"#8e8e8e",fontSize:12}}>
            {new Date().getFullYear()} Instagram for Meta
        </div>
    </div>

    </>
  )
}

export default Landing