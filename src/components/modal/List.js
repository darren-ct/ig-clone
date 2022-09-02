import { useEffect, useLayoutEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';

import {listActions} from '../../slices/list';
import ModalItem from '../secondary/ModalItem';

import cross from '../../assets/wrong.png'
// DUMMY
import me from '../../assets/me.jpeg'
const list2 = [
  {image:me,username:'m.i.k_chris',name:'m.i.k_darren',isFollowed:false},
  {image:me,username:'m.i.k_chris',name:'m.i.k_darren',isFollowed:true},
  {image:me,username:'m.i.k_chris',name:'m.i.k_darren',isFollowed:true},
  {image:me,username:'m.i.k_chris',name:'m.i.k_darren',isFollowed:false},
  {image:me,username:'m.i.k_chris',name:'m.i.k_darren',isFollowed:true},
];


const List = ({content,setModal}) => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.lists.modal);

  console.log("in")

  useLayoutEffect(()=>{
      getList()
  },[]);
  
  useEffect(()=>{
     document.body.classList.add("hide-scroll")

     return () => {
      document.body.classList.remove("hide-scroll")
     }
  },[]);

  const close = () => {
    setModal(false)
  };

  const ignore = (e) => {
    e.stopPropagation()
  };

  const getList = () => {
    // fetch sesuai content
    
  }

  return (
    <div className="position-fixed d-flex align-items-center justify-content-center" 
    style={{zIndex:200,left:0,top:0,width:"100vw",height:"100vh",background:"rgba(0,0,0,.8)"}} 
    onClick={close}>
     
        {/* White Box */}
          <div className="d-flex flex-column rounded bg-white" style={{width:480,height:480}} onClick={ignore}>
               {/* Head */}
               <div className="d-flex align-items-center justify-content-center px-4 py-3 border-bottom position-relative" style={{borderColor:'#efefef'}}>
                     <span style={{fontWeight:700}}>{content}</span>
                     <img src={cross} width={24} className="position-absolute" style={{right:12,cursor:"pointer"}} onClick={close}/>
               </div>
               
              {/* Body */}
               <div style={{flex:1,overflowY:"scroll"}}>
                    <div className='d-flex flex-column'>
                          {list2.map(item => <ModalItem item={item}/>)}
                    </div>
               </div> 
          </div> 
          
    </div>
  )
}

export default List