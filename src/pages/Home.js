import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HomePost from '../components/main/HomePost'
import StoryBar from '../components/main/StoryBar'
import Suggestion from '../components/secondary/Suggestion'
import List from "../components/modal/List";

// Dummy
import me from "../assets/me.jpeg"
import daniel from "../assets/dummies/daniel-dummy.jpeg"
import baby from "../assets/dummies/baby-dummy.jpeg"
import enrico from "../assets/dummies/enrico-dummy.jpeg"
import dog from "../assets/dummies/doggy-dummy.jpeg"
import chris from "../assets/dummies/cb-dummy.jpeg"
import china from "../assets/dummies/yummy-dummy.jpeg"

const Home = () => {
  const navigate = useNavigate();
  

  const items = [
    {
      image : daniel,
      username : "Daniel" ,
      isSeenAll :  true
    },
    {
      image : daniel,
      username : "Daniel" ,
      isSeenAll :  true
    },
    {
      image : daniel,
      username : "Daniel" ,
      isSeenAll :  true
    },
    {
      image : daniel,
      username : "Daniel" ,
      isSeenAll :  true
    },
    {
      image : daniel,
      username : "Daniel" ,
      isSeenAll :  true
    },
    {
      image : daniel,
      username : "Daniel" ,
      isSeenAll :  true
    },
    {
      image : baby,
      username : "Baby Darren" ,
      isSeenAll :  true
    },    
    {
      image : enrico,
      username : "Enrico" ,
      isSeenAll :  false
    },
    {
      image : dog,
      username : "Twinsi" ,
      isSeenAll :  false
    },
    {
      image : chris,
      username : "chrisBrown" ,
      isSeenAll :  false
    },
    {
      image : china,
      username : "Anak Cina" ,
      isSeenAll :  false
    },
  ];

  const item = {
    profile_image : enrico,
    username : "enrico_farrel",
    isSeenAll : false,
    images: [enrico,me],
    caption : "HAHHHHH",
    likes : 100,
    comments : 122,
    time : ""
  };

  const item1 = {
    profile_image : daniel,
    username : "daniel_pah",
    isSeenAll : false,
    images: [daniel,me],
    caption : "In Jakarta",
    likes : 12,
    comments : 12,
    time : ""
  };

  const item2 = {
    profile_image : chris,
    username : "chris_brown",
    isSeenAll : false,
    images: [chris,me],
    caption : "Big album coming out",
    likes : 1200000,
    comments : 12213,
    time : ""
  };

  const item3 = {
    profile_image : china,
    username : "kungfu-panda",
    isSeenAll : false,
    images: [china,me],
    caption : "So yummy....",
    likes : 12,
    comments : 12,
    time : ""
  };

  const suggestion = {
        image : me,
        username : "Darren",
        connection_name : "enzo",
        connection_number : 19,
        button : "Follow"
  }

  const suggestion1 = {
    image : chris,
    username : "Chris",
    connection_name : "enzo",
    connection_number : 19,
    button : "Follow"
  }

  const suggestion2 = {
  image : baby,
  username : "Baby",
  connection_name : "enzo",
  connection_number : 19,
  button : "Follow"
  }

   const suggestion3 = {
  image : daniel,
  username : "Daniel",
  connection_name : "enzo",
  connection_number : 19,
  button : "Follow"
   }

  // Effects
  useEffect(()=>{
      getStories();
      getReccomendations();
      getPosts();
  },[])

  // Functions
  const getStories = async() => {

  };

  const getReccomendations = async() => {

  };

  const getPosts = async() => {

  };

  return (
    <div className='d-flex flex-row justify-content-center p-4'>
        <div style={{width:470}} className="d-flex flex-column me-4">
              <StoryBar items={items}/>
      
              <HomePost item={item3}/>
              {/* <HomePost item={item1}/>
              <HomePost item={item2}/>
              <HomePost item={item}/> */}
        </div>

        <div style={{width:350}} className='d-flex flex-column p-4'>
            {/* Me */}
              <div className='d-flex flex-row position-relative'>
                   <img src={me} width={48} height={48} className='rounded-circle border' style={{borderColor:"#8e8e8e"}}/>
                   <div className='d-flex flex-column ms-4'>
                       <span>selftaught_tj</span>
                       <span style={{color:"#8e8e8e"}}>Darren Christian Tj.</span>
                   </div>

                   <p className='position-absolute end-0 top-50 translate-middle-y' style={{color:"#0095f6",fontSize:12,fontWeight:600,cursor:"pointer"}}>Switch</p>
              </div>

            {/* Suggestion */}
              <div className='d-flex flex-row justify-content-between align-items-center mt-3 mb-1'>
                 <p style={{color:"#8e8e8e",fontWeight:600}}>Suggestions For You</p>
                 <p style={{fontWeight:600, cursor:"pointer"}} onClick={()=>{navigate("/suggestions")}}>See All</p>
              </div>

            {/* List */}
            <Suggestion item={suggestion}/>
            <Suggestion item={suggestion1}/>
            <Suggestion item={suggestion2}/>
            <Suggestion item={suggestion3}/>
            

            {/* Others */}
            <p className='mt-4' style={{color:"#c7c7c7",fontSize:12}}>
              <span style={{color:'#c7c7c7',fontSize:12}}>About</span> - 
              <span style={{color:'#c7c7c7',fontSize:12}}>Help</span> -
              <span style={{color:'#c7c7c7',fontSize:12}}>Press</span> -
              <span style={{color:'#c7c7c7',fontSize:12}}>API</span> -
              <span style={{color:'#c7c7c7',fontSize:12}}>Jobs</span> -
              <span style={{color:'#c7c7c7',fontSize:12}}>Privacy</span> -
              <span style={{color:'#c7c7c7',fontSize:12}}>Terms</span> - 
              <span style={{color:'#c7c7c7',fontSize:12}}>Locations</span> -
              <span style={{color:'#c7c7c7',fontSize:12}}>Language</span>
            </p>

            <p className='mt-2' style={{color:"#c7c7c7"}}>{new Date().getFullYear()} INSTAGRAM FROM META</p>

        </div>
    </div>
  )
}

export default Home