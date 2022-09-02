import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const StoryBar = ({items}) => {
  return (
          <div className='bg-white d-flex flex-row border rounded p-2 pt-3 mb-4' style={{borderColor:"#8e8e8e"}}>
               <Swiper spaceBetween={24} slidesPerView={6} >
                     {items.map(item => (
                         <SwiperSlide>
                         <div className='mx-2 d-flex flex-column align-items-center'>
                             <img src={item.image} className='border rounded-circle' 
                             style={{borderColor:"#efefef",objectFit:"cover"}} width={64} height={64}/>

                             <span style={{fontSize:12}}>{item.username.slice(0,8) + "..."}</span> 
                         </div>
                         </SwiperSlide>
                     ))}
               </Swiper>
          </div>
  )
}

export default StoryBar