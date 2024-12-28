/* eslint-disable react/prop-types */

import { FaPlayCircle, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MangaCard = ({ manga }) => {
  const { mal_id, images, title, score, status } = manga;
  return (
    <div className="h-64 bg-gradient-to-r from-neutral-100 to-neutral-700 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-2 overflow-hidden">
      <img
        src={images?.webp?.large_image_url}
        alt={title}
        className="w-full h-[60%] object-cover rounded-t-lg"
      />

      <div className="absolute flex items-center top-2 right-2 bg-gradient-to-r from-yellow-500 to-black text-white px-2 py-1 rounded-full">
        <FaStar className="mr-1" /> {score}
      </div>

      <div className="p-2 relative">
        <h3 className=" text-gray-800 font-semibold hover:text-blue-500">
          {title}
        </h3>
        <p className="text-sm text-gray-500 ">{status}</p>
      </div>
      <div className="absolute inset-0 bg-transparent hover:bg-white/40 flex items-center justify-center transform  transition-all duration-300 ease-in-out opacity-0 hover:opacity-100">
        <Link
          className="rounded-full bg-white text-black p-3 hover:bg-black hover:text-white duration-300 ease-in-out"
          to={`/manga/${mal_id}?title=${title.split(" ").join("_")}`}
        >
          <FaPlayCircle className=" size-8" />
        </Link>
      </div>
    </div>
  );
};

export default MangaCard;
