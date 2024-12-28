/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const AnimeDetailRecommendation = ({ recommendations }) => {
  const topFifteen = recommendations?.data.slice(0, 15);
  return (
    <div className="p-4 my-4 bg-gray-900 rounded-lg text-white">
      <h2 className="text-lg font-semibold mb-4">Recommended Manga</h2>
      {recommendations?.data && recommendations?.data.length > 0 ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          navigation
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {topFifteen.map((rec) => (
            <SwiperSlide key={rec?.entry.mal_id}>
              <div className="relative h-64 bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src={rec?.entry.images?.jpg.image_url}
                  alt={rec?.entry.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-center">
                  <Link
                    className="text-white font-medium hover:underline"
                    to={`/anime/${rec?.entry.mal_id}?title=${rec?.entry.title
                      .split(" ")
                      .join("_")}`}
                  >
                    {rec?.entry.title}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-400">
          No recommendations available.
        </p>
      )}
    </div>
  );
};

export default AnimeDetailRecommendation;
