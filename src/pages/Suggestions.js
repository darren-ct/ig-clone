import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"

// Dummy
import me from "../assets/me.jpeg";

const list = [
  {image:me,username:"m.i.k_darren",name:"m.i.k_chris",followed_by_name:"enzo",followed_by_num:5,is_followed:true},
  {image:me,username:"m.i.k_darren",name:"m.i.k_chris",followed_by_name:"enzo",followed_by_num:5,is_followed:false},
  {image:me,username:"m.i.k_darren",name:"m.i.k_chris",followed_by_name:"enzo",followed_by_num:5,is_followed:true}
]

const Suggestions = () => {
  const dispatch = useDispatch();

  // useEffect
  useEffect(()=>{
  getSuggestions();
  },[]);

  // Functions
  const getSuggestions = async() => {


  };

  const renderItem = (item) => {
        return (
          <div className="d-flex flex-row align-items-center mb-3">

              <img src={item.image} className="border rounded-circle me-3" width={48} height={48} style={{objectFit:"cover",borderColor:"#262626"}}/>
              <div className="d-flex flex-column" style={{flex:1}}>
                  <span style={{fontWeight:600}}>{item.username}</span>
                  <span className="" style={{color:'#8e8e8e'}}>{item.name}</span>
                  <span style={{color:'#8e8e8e',fontSize:12}}>Followed by {item.followed_by_name} + {item.followed_by_num - 1} more</span>
              </div>
              <button className="px-3 py-1 rounded" 
                 style={item.is_followed ? {fontWeight:600,border:"1px solid #8e8e8e",backgroundColor:"white"}:
                 {fontWeight:600,color:"white",backgroundColor:"#0095f6"}}>
                 {item.is_followed ? "Following" : "Follow"}
              </button>

          </div>
        )
  };

  return (
    <>
      <div className='mx-auto mt-4' style={{width:600}}>
         <p style={{fontWeight:600}} >Suggested</p>
         <div className='bg-white p-4'>
             {list.map(item => renderItem(item))}
         </div>
      </div>

      <div className="d-flex flex-column align-items-center mt-4">
         <div className="d-flex flex-row justify-content-center align-items-center">
             <span className="me-3" style={{color:"#00376b",fontWeight:600,cursor:"pointer"}}>ABOUT</span>
             <span className="me-3" style={{color:"#00376b",fontWeight:600,cursor:"pointer"}}>HELP</span>
             <span className="me-3" style={{color:"#00376b",fontWeight:600,cursor:"pointer"}}>PRESS</span>
             <span className="me-3" style={{color:"#00376b",fontWeight:600,cursor:"pointer"}}>API</span>
             <span className="me-3" style={{color:"#00376b",fontWeight:600,cursor:"pointer"}}>JOBS</span>
             <span className="me-3" style={{color:"#00376b",fontWeight:600,cursor:"pointer"}}>PRIVACY</span>
             <span className="me-3" style={{color:"#00376b",fontWeight:600,cursor:"pointer"}}>TERMS</span>
         </div>
         <div className="d-flex flex-row justify-content-center align-items-center my-2">
             <span className="me-3" style={{color:"#00376b",fontWeight:600,cursor:"pointer"}}>LOCATIONS</span>
             <span className="me-3" style={{color:"#00376b",cursor:"pointer"}}>LANGUAGE</span>
         </div>
         <span style={{fontWeight:600,color:"#8e8e8e"}}>
              {new Date().getFullYear()} INSTAGRAM FROM META
         </span>

      </div>
    </>
  )
}

export default Suggestions