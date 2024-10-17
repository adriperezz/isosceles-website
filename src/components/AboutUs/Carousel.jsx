import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 6000 }}
      pagination={{ clickable: true }}
      className="w-full"
    >
      <SwiperSlide className="text-center p-6 bg-white rounded-lg transition-shadow duration-300">
        <p className="italic text-gray-600">
          “Lucas transformó mi hogar con reformas impecables, demostrando
          destreza y eficiencia. Su atención al detalle y dedicación resultaron
          en un espacio elegante y funcional que superó todas mis expectativas.”
        </p>
        <div>
          <p className="mt-2 mb-8 text-3xl">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>{' '}
          <h5 className="font-semibold text-blue-900">- Mauro Ojea</h5>
        </div>
      </SwiperSlide>
      <SwiperSlide className="text-center p-6 bg-white rounded-lg transition-shadow duration-300">
        <p className="italic text-gray-600">
          “Transformaron mi cocina por completo, con excelentes resultados y en
          el tiempo previsto. Destaco sus consejos, la calidad del trabajo y la
          limpieza final; sin duda los volveré a llamar.”
        </p>
        <div>
          <p className="mt-2 mb-8 text-3xl">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
          <h5 className=" mb-4 font-semibold text-blue-900">
            - Alejandra Sáez
          </h5>
        </div>
      </SwiperSlide>
      <SwiperSlide className="text-center p-6 bg-white rounded-lg transition-shadow duration-300">
        <p className="italic text-gray-600">
          “El servicio de Isosceles Global SL fue impecable: eficaces,
          profesionales y atentos en todo momento. Cumplieron con los plazos y
          ofrecieron soluciones rápidas a cualquier inconveniente. Destaco
          especialmente el trato al cliente, cercano y amable, que hizo que la
          experiencia fuera excelente de principio a fin.”
        </p>
        <div>
          <p className="mt-2 mb-8 text-3xl">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
          <h5 className="mb-4 font-semibold text-blue-900">- Carmen Pérez</h5>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
