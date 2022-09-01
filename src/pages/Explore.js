import { useDispatch,useSelect } from "react-redux/es/exports";
import { useEffect } from "react";


// Dummy
import me from "../assets/me.jpeg"
import daniel from "../assets/dummies/daniel-dummy.jpeg"
import baby from "../assets/dummies/baby-dummy.jpeg"
import sleepy from "../assets/dummies/sleepy-dummy.jpeg"
import dog from "../assets/dummies/doggy-dummy.jpeg"
import chris from "../assets/dummies/cb-dummy.jpeg"
import china from "../assets/dummies/yummy-dummy.jpeg"
import Post from "../components/main/Post"

const items = [
  {image:daniel,likes:12,comments:12,isMultiple:true},
  {image:sleepy,likes:0,comments:1,isMultiple:false},
  {image:baby,likes:1222,comments:123,isMultiple:false},
  {image:dog,likes:2,comments:0,isMultiple:false},
  {image:china,likes:133,comments:12,isMultiple:true},
  {image:chris,likes:133,comments:12,isMultiple:true},
]

const Explore = () => {
  const dispatch = useDispatch()

  // Effects
  useEffect(()=>{
      getPosts()
  },[]);

  // Functions
  const getPosts = async() => {
   
  };

  return (
    <div className='container-lg py-4'>
           <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:16}}>
                {items.map(item => <Post item={item}/>)}
           </div>
    </div>
  )
}

export default Explore