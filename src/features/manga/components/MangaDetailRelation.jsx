import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const MangaDetailRelation = ({ relations }) => {
  console.log(relations);
  return (
    <div className="p-4 bg-gray-900 rounded-lg text-white">
      <h2 className="text-lg font-semibold mb-4">Recommended Manga</h2>
      {relations && relations?.data.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={4}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 1,
            },
          }}
        >
          {relations?.data.map((rec) => (
            <SwiperSlide key={rec.mal_id}>
              <div className="p-2 bg-gray-800 rounded-lg shadow-md text-center">
                <img
                  src={rec?.entry.images?.jpg.image_url}
                  alt={rec?.entry.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-2"
                />
                <h6 className="text-sm font-medium truncate">
                  {rec?.entry.title}
                </h6>
                <p className="text-xs text-gray-400">{rec?.entry.type}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default MangaDetailRelation;
