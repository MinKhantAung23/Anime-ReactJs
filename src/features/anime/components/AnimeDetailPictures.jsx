/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";

const AnimeDetailPictures = ({ pictures }) => {
  return (
    <div className="p-8 my-8 bg-gray-900 rounded-lg text-white shadow-xl overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 text-center ">Image Gallery</h2>

      {pictures?.data && pictures?.data.length > 0 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="cards"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          modules={[Pagination, Autoplay, EffectCards]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {pictures.data.map((pic, index) => (
            <SwiperSlide key={pic.jpg.image_url || index}>
              <div className=" w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
                <img
                  src={pic.jpg.large_image_url}
                  alt="Pictures"
                  className="w-full h-full object-cover rounded-lg transform transition-all duration-300 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-400">No images available.</p>
      )}
    </div>
  );
};

export default AnimeDetailPictures;
