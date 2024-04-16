import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './Style.css'; 

export default function SwipperBanner() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="../../public/pic1.jpg" alt="" />
        <div className="welcome-text">Book your preferred house today and secure your place in the Havenly Habitat community.</div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../public/pic2.jpg" alt="" />
        <div className="welcome-text">Book your preferred house today and secure your place in the Havenly Habitat community.</div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../public/pic3.jpg" alt="" />
        <div className="welcome-text">Book your preferred house today and secure your place in the Havenly Habitat community.</div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../public/pic4.jpg" alt="" />
        <div className="welcome-text">Book your preferred house today and secure your place in the Havenly Habitat community.</div>
      </SwiperSlide>
    </Swiper>
  );
}
