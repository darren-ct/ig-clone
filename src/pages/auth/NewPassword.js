import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import mockup1 from '../../assets/mockups/mockup-1.svg'
import mockup2 from '../../assets/mockups/mockup-3.svg'
import logo from '../../assets/logo.png'

const NewPassword = () => {
    const navigate = useNavigate();

    // States
    const[input,setInput] = useState({
      new : "",
      reenter : ""
    })

    // Functions
    const onChange = (e) => {
      setInput(prev => { return {...prev,[e.target.name]:e.target.value} })
    };

    const changePassword = async() => {
         try{
               navigate("/landing")
         } catch(err) {

         }
    };


  return (
  <>
    {/* Main */}
    <div className='d-flex flex-row justify-content-center' style={{marginTop:120}}>
    
           {/* Form */}
           <div className='d-flex flex-column' style={{width:360}}>
             {/* Top */}
              <div className='d-flex flex-column align-items-center bg-white border' style={{padding:'32px 32px 8px 32px'}}>
                  <img src={logo} width={180} />

                  {/* Inputs */}
                  <div className='input-group mb-2 pb-2'>
                       <input type="password" onChange={onChange} value={input.new} name="password" placeholder='New Password' className="rounded px-3 py-2" style={{border:'1px solid #efefef',width:"100%"}}/>
                  </div>

                  <div className='input-group mb-2 pb-2'>
                       <input type="password" onChange={onChange} value={input.reenter} name="reenter" placeholder='Reenter New password' className="rounded px-3 py-2" style={{border:'1px solid #efefef',width:"100%"}}/>
                  </div>

                 <button className='mb-4 p-2 rounded' style={{width:'100%',color:"white",background:"#0095f6"}} onClick={changePassword}>Change Password</button>

  
              </div>
              
              {/* Bottom */}
              <div className='d-flex flex-row justify-content-center bg-white mt-2 p-4 border'>
                  <div className='me-3'>Dont have an account?</div>
                  <div style={{color:"#0095f6",cursor:"pointer"}} onClick={()=>{navigate("/login")}}>Sign up</div>
              </div>

           </div>

    </div>

  </>
  )
}

export default NewPassword