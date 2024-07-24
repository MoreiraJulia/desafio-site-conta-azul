import { Navigation, Pagination,  A11y } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import ListaOResultado from '../services/ListaOResultado';
import ModalCrieSuaConta from "./ModalCrieSuaConta";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperOResultado() {
  return (
    <div style={{  position: "relative" }}>
        <div className="swiper-button image-swiper-button-next">
            <IoIosArrowForward />
        </div>
        <div className="swiper-button image-swiper-button-prev">
            <IoIosArrowBack />
        </div>
        <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled"
          }}
        pagination={{ clickable: true }}
        loop={true}
        className="pb-8"
        >
        {ListaOResultado.map((item) => ( 
            <SwiperSlide>
                <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10">
                    <div className="max-w-lg flex flex-col justify-center gap-7">
                        <h3 className="text-2xl text-[#334455] font-bold">{item.name}</h3>
                        <p className="text-[#334455] text-base font-medium">{item.texto}</p>
                        <ModalCrieSuaConta />
                    </div>
                    <img src={item.urlImage} className="self-center	"/>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
    
  );
};