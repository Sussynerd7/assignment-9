// App.jsx or your component file
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../assets/demo-user.png'
import img2 from '../assets/user.png'
// Import Swiper styles
import 'swiper/css'; 
// You may also want 'swiper/css/pagination' and 'swiper/css/navigation' 
// if you plan to use those features.

export default function SimpleSlider() {
  return (
    <Swiper
      // Optional parameters: passed as props
      spaceBetween={50} // Space between slides in px
      slidesPerView={1}  // Number of slides to show at once
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} // Callback when Swiper instance is initialized
    >
      <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
     
      {/* ... more SwiperSlide components */}
    </Swiper>
  );
}