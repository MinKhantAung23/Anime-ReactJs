/* eslint-disable react/prop-types */

import { FaPlayCircle, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AnimeCard = ({ anime }) => {
  const { mal_id, images, title, score, year } = anime;
  return (
    <div className="relative h-64 bg-gradient-to-r from-neutral-100 to-neutral-700 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-2 overflow-hidden">
      <img
        src={images?.webp?.large_image_url}
        alt={title}
        className="w-full h-[60%] object-cover"
      />

      <div className="absolute top-2 right-2 flex items-center bg-gradient-to-r from-yellow-500 to-black text-white text-sm px-3 py-1 rounded-full shadow">
        <FaStar className="mr-1 text-yellow-300" /> {score || "N/A"}
      </div>

      <div className="p-3">
        <h3 className="text-gray-800 font-semibold hover:text-blue-500 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{year || "Unknown Year"}</p>
      </div>

      <div className="absolute inset-0 bg-transparent hover:bg-white/40 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">
        <Link
          to={`/anime/${mal_id}?title=${title.split(" ").join("_")}`}
          className="rounded-full bg-white text-black p-4 hover:bg-black hover:text-white duration-300 ease-in-out"
        >
          <FaPlayCircle className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default AnimeCard;
