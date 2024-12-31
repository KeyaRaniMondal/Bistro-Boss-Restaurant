import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/sectionTitle/sectionTitle';
const Catagory=()=>{
    return(
        <>
        <SectionTitle  subheading={"order from 11 Am to 10 Pm"}
            heading={"Order Online"}>
        
        </SectionTitle>
        <Swiper
          slidesPerView={3}
          spaceBetween={-300}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>

        </Swiper>
      </>
    )
}
export default Catagory