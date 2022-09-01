import { useState } from 'react';

import ChangePassword from '../components/main/ChangePassword';
import ChangeProfile from '../components/main/ChangeProfile';

const Settings = () => {
  const [location,setLocation] = useState("profile");
 
  return (
    <div className='container-lg p-4' style={{height:'calc(100vh - 66px)'}}>
         <div className='d-flex flex-row  border bg-white mt-2' style={{borderColor:'#efefef',height:'100%'}}>
                  
                {/* Left */}
                <div style={{flex:1,borderColor:"#8e8e8e",height:"100%"}} className="px-4 py-4 border-end">
                      <p style={location === "profile" ? {fontSize:16,fontWeight:500,marginLeft:6,cursor:"pointer"} : 
                      {fontSize:16,fontWeight:300,marginLeft:6,cursor:"pointer"} } onClick={()=>{setLocation("profile")}}>Edit profile</p>
                      
                      <p style={location === "password" ? {fontSize:16,fontWeight:500,marginLeft:6,cursor:"pointer"} : 
                      {fontSize:16,fontWeight:300,marginLeft:6,cursor:"pointer"} } onClick={()=>{setLocation("password")}}>Change password</p>
                </div>

                {/* Right */}
                <div style={{flex:3,height:"100%",overflowY:"scroll"}} className="p-4">
                        { location === "profile" ? <ChangeProfile/> : <ChangePassword/> }
                </div>
         </div>
   </div>
  )
}

export default Settings