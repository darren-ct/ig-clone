import {useSelector} from "react-redux";

import SearchResult from '../secondary/SearchResult';

import me from '../../assets/me.jpeg'

const item = { 
    image : me,
    username : "m.i.k_darren",
    name : "m.i.k_chris"
}

const SearchDropdown = () => {
    const isSearchDrop = useSelector(state => state.toggle.searchDrop);

  return (
    <>

    <div className="position-absolute start-50 translate-middle bg-white" 
         style={isSearchDrop ? {opacity:1, visibility:"visible", top:"140%", zIndex:120, width:16, height:20, clipPath:'polygon(50% 0%, 0% 100%, 100% 100%)', transition:'150ms linear'} : 
             {opacity:0, visibility:"visible", top:"140%", zIndex:120, width:16, height:20, clipPath:'polygon(50% 0%, 0% 100%, 100% 100%)', transition:'150ms linear'}}>
            
    </div>

    <div className='position-absolute end-0 d-flex flex-column align-items-start justify-content-start p-3 bg-white rounded' 
         style={isSearchDrop ? 
             {width:"100%",height:300, top:"140%", zIndex:100, opacity:1, boxShadow:'8px 8px 51px 0px rgba(0,0,0,0.4)', visibility:"visible", overflowY:"scroll",transition:'150ms linear'} :
             {width:"100%",height:300, top:"140%", zIndex:100, transform:'translateY(-20px)', opacity:0,visibility:"hidden", overflowY:"scroll", transition:'150ms linear'}}>

            <div className='d-flex flex-row justify-content-between align-items-end mb-4' style={{width:"100%"}}>
                   <span>Recent</span>
                   <span style={{fontWeight:600,color:"#0095f6",cursor:"pointer"}}>Clear All</span>
            </div>

            <SearchResult item={item} />
            <SearchResult item={item} />
            <SearchResult item={item} />
            <SearchResult item={item} />
            <SearchResult item={item} />
            <SearchResult item={item} />
    </div>

    </>
  )
}


export default SearchDropdown