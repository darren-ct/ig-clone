import {useNavigate} from 'react-router-dom';
import wrong from '../../assets/wrong.png'

const SearchResult = ({item}) => {
    const navigate = useNavigate()

  return (
    <div className='d-flex flex-row align-items-center justify-content-start mb-3' style={{width:'100%'}}>
          <img src={item.image} width={48} height={48} className="rounded-circle me-3 border" style={{objectFit:"cover",borderColor:"#efefef",cursor:"pointer"}}/>
          <div className='d-flex flex-column' style={{flex:1,cursor:"pointer"}}>
                <span style={{fontWeight:600}}>{item.username}</span>
                <span style={{color:"#8e8e8e"}}>{item.name}</span>
          </div>
          <img src={wrong} width={20} style={{cursor:"pointer"}}/>
    </div>
  )
}

export default SearchResult