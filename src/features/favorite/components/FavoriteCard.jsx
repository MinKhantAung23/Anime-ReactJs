/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { removeFavorite } from "../../../store/features/favoriteSlice";
import toast from "react-hot-toast";
import { addBookmark } from "../../../store/features/bookmarkSlice";
import DeleteConfirm from "../../../components/DeleteConfirm";

const FavoriteCard = ({ favorites }) => {
  const { mal_id, images, title, score, type } = favorites;

  const dispatch = useDispatch();

  const handleBookmark = () => {
    dispatch(addBookmark(favorites));
    toast.success("Added to bookmarks successfully!", {
      position: "top-center",
    });
  };

  return (
    <div className="relative h-64 my-4 bg-gradient-to-r from-neutral-100 to-neutral-700 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-2 overflow-hidden">
      <img
        src={images?.webp?.large_image_url}
        alt={title}
        className="w-full h-[60%] object-cover"
      />

      <div className="absolute top-2 left-2 flex space-x-2 ">
        <button
          onClick={() => handleBookmark()}
          className="text-white text-lg bg-red-500 p-2 rounded-full hover:bg-red-600 transition"
        >
          <FaBookmark />
        </button>
      </div>

      <div className="absolute top-2 right-2  bg-gray-200 text-red-500 text-sm px-3 py-1 rounded-lg shadow">
        <DeleteConfirm item={favorites} isBookmark={false} />
      </div>

      <div className="p-3">
        <h3 className="text-gray-800 font-semibold  truncate">{title}</h3>
        <h4 className="text-xs text-gray-500 mb-2">{type}</h4>

        {type === "Manga" ? (
          <Link
            to={`/manga/${mal_id}?title=${title.split(" ").join("_")}`}
            className="text-sm text-gray-700 font-bold underline hover:text-blue-500"
          >
            Click to explore
          </Link>
        ) : (
          <Link
            to={`/anime/${mal_id}?title=${title.split(" ").join("_")}`}
            className="text-sm font-bold text-gray-700 hover:text-blue-500 underline"
          >
            Click to explore
          </Link>
        )}
      </div>
    </div>
  );
};

export default FavoriteCard;
