import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from "/pic1.jpg"
import img2 from "/pic2.jpg"
import img3 from "/pic3.jpg"
import img4 from "/pic4.jpg"
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
        <img src={img1} alt="" />
        <div className="welcome-text">Book your preferred house today and secure your place in the Havenly Habitat community.</div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
        <div className="welcome-text">Experience luxury living at its finest in our exclusive residential community.</div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
        <div className="welcome-text">Find tranquility and comfort in our beautifully designed homes surrounded by nature.</div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />
        <div className="welcome-text">Join our vibrant community and make unforgettable memories in your new home.</div>
      </SwiperSlide>
    </Swiper>
  );
}
