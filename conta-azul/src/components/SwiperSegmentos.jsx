import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ListSegmentosSwiper from './ListSegmentosSwiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function SwiperSegmentos()  {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1.3}
      pagination={{ clickable: true }}
      breakpoints={{
        400: {slidesPerView: 1.5,},
        500: {slidesPerView: 1.8,},
        740: {slidesPerView: 3,},
        980:{slidesPerView: 4,},
        1200: {slidesPerView: 5,},
      }}
      className="pb-8">
      {ListSegmentosSwiper.map((item) => ( 
        <SwiperSlide>
          <a href={item.link}>
            <figure className="rounded-[5px] relative overflow-hidden	">
              <img src={item.urlImage} className="object-cover h-full w-full" />
              
              <figcaption class="text-sm font-bold text-white leading-5 text-center absolute box-border justify-center items-end w-full h-full p-8 flex left-0 bottom-0 fundo-swiper-azul">{item.name}</figcaption>
            </figure>
          </a>
        </SwiperSlide>
      )
      )}
    </Swiper>
  );
};