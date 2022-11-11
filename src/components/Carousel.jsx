import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image1 from '../assets/project-image01.png'
import Image2 from '../assets/project-image02.png'
import Image3 from '../assets/project-image03.png'
import Image4 from '../assets/project-image04.png'
import Image5 from '../assets/project-image05.png'

export default function Carousel() {

  return (
    <div className="mx-auto max-w-5xl">
      <Swiper
        modules={[ Navigation, Pagination ]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img src={Image1} alt="projects" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img src={Image2} alt="projects" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img src={Image3} alt="projects" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img src={Image4} alt="projects" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img src={Image5} alt="projects" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
