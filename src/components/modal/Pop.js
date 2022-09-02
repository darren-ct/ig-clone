import { useNavigate } from "react-router-dom"

const Pop = ({id,setModal}) => {
  const navigate = useNavigate();

  const ignore = (e) => {
    e.stopPropagation();
    };
  return (
    <div className='position-fixed d-flex align-items-center justify-content-center' 
    style={{zIndex:200,left:0,top:0,width:"100vw",height:"100vh",background:"rgba(0,0,0,.8)"}} onClick={()=>{setModal(false)}}>

        <div className="d-flex flex-column rounded bg-white" style={{width:480,height:254}} onClick={ignore}>
            <div className='p-4 d-flex align-items-center justify-content-center' style={{cursor:"pointer"}}>Save Post</div>
            <div className='p-4 d-flex align-items-center justify-content-center border-top border-bottom' style={{cursor:"pointer"}} onClick={()=>{navigate(`/details/${id}`)}}>Go to Post</div>
            <div className='p-4 d-flex align-items-center justify-content-center border-bottom text-danger' style={{cursor:"pointer",fontWeight:"bold"}}>Unfollow</div>
            <div className='p-4 d-flex align-items-center justify-content-center' style={{cursor:"pointer"}} onClick={()=>{setModal(false)}}>Cancel</div>
        </div>

    </div>
  )
}

export default Pop