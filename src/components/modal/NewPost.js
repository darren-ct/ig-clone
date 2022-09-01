import { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux";

import toggleActions from "../../slices/toggle";

import whitecross from "../../assets/white-cross.svg";
import left from "../../assets/left-arrow.png";
import photo from "../../assets/image.png";
import me from "../../assets/me.jpeg";

function NewPost() {

  const dispatch = useDispatch();

  const isPostModal = useSelector(state => state.toggle.postModal);
  const[image,setImage] = useState(null);
  const[form,setForm] = useState({
    image : null,
    description : ""
  })

  if(isPostModal){ document.body.classList.add("hide-scroll")  } else { document.body.classList.remove("hide-scroll") };

  // useEffect
  useEffect(()=>{
      if(form.image && typeof form.image !== "string"){
      const newImage = URL.createObjectURL(form.image);
      setImage(newImage)
      }
  },[form])

  // Functions
  const onSelect = (e) => {
    setForm(prev => { return {...prev, image : e.target.files[0]} });
  };

  const onChange = (e) => {
    setForm(prev => { return {...prev,description:e.target.value}})
  };

  const resetAll = () => {
   setForm({ image:null, description:""});
   setImage(null);
  };

  const ignore = (e) => {
  e.stopPropagation();
  };

  return (
    <div className="position-fixed d-flex align-items-center justify-content-center" 
    style={isPostModal ? {zIndex:200,left:0,top:0,width:"100vw",height:"100vh",background:"rgba(0,0,0,.8)"} : {visibility:"hidden",opacity:0}} 
    onClick={()=>{dispatch(toggleActions.actions.togglePost())}}>
     
         {/* Cross */}
          <img src={whitecross} className="position-fixed" style={isPostModal ? {zIndex:201,top:16,right:16,cursor:"pointer"} : 
          {opacity:0,visibility:"hidden"}}/>

        {/* White Box */}
          <div className="d-flex flex-column rounded bg-white" style={!image ? {width:480,height:480} : {width:800,height:480}} onClick={ignore}>
            
               {/* Head */}
               {image ? 

               <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom" style={{borderColor:'#efefef'}}>
                     <img src={left} style={{cursor:"pointer"}} onClick={resetAll}/>
                     <span style={{fontWeight:700}}> Create a new post </span>
                     <span style={{color:"#0095f6",fontWeight:700,cursor:"pointer"}}>Share</span>
               </div> :

               <div className="d-flex align-items-center justify-content-center px-4 py-3 border-bottom" style={{borderColor:'#efefef'}}>
                     <span style={{fontWeight:700}}> Create a new post </span>
               </div>
               
               }

              {/* Body */}
               { !image ?

               <div className="d-flex flex-column align-items-center justify-content-center p-4" style={{flex:1}}>
                    <img src={photo} width={64}/>
                    <div style={{fontSize:22,fontWeight:300}} className="my-2">Add new posts here</div>
                    <label htmlFor="uploadpost" className="px-3 py-2 text-white rounded" style={{background:"#0095f6",cursor:"pointer",fontWeight:600}}>Select from computer</label>
                    <input onChange={onSelect} type="file" style={{visibility:"hidden"}} id="uploadpost"/>
               </div> : 

               <div className="d-flex flex-row align-items-start justify-content-start" style={{flex:1}}>
                     <img src={image} style={{width:"60%",height:"87.4%",objectFit:"cover"}}/>
                     <div className="d-flex flex-column p-4" style={{width:"40%",height:"100%"}}>
                          <div className="d-flex flex-row align-items-center mb-4">
                               <img src={me} width={32} height={32} className="rounded-pill rounded-circle border me-3" style={{borderColor:"#8e8e8e",objectFit:"cover"}} />
                               <span style={{fontSize:16, fontWeight:600}}>darrens_portfolio</span>
                          </div>
                          <textarea onChange={onChange} placeholder="Write a caption..." style={{fontSize:16,height:"100%",resize:"none"}}>

                          </textarea>
                     </div>
               </div>

               }
          </div> 
          
        
    </div>
  );
}

export default NewPost;