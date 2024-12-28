/* eslint-disable react/prop-types */
import { FaBookmark, FaHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  addBookmark,
  removeBookmark,
} from "../../../store/features/bookmarkSlice";
import {
  addFavorite,
  removeFavorite,
} from "../../../store/features/favoriteSlice";

const MangaDetailInformation = ({ manga }) => {
  const dispatch = useDispatch();

  const favorite = useSelector((state) => state.favorites.favorites);
  const isFavorite = () => {
    return favorite.find((item) => item.mal_id === manga?.mal_id);
  };

  const handleFavorite = (manga) => {
    if (isFavorite()) {
      dispatch(removeFavorite(manga));
      toast.success("Removed from favorites!", {
        position: "top-center",
      });
    } else {
      dispatch(addFavorite(manga));
      toast.success("Added to favorites successfully!", {
        position: "top-center",
      });
    }
  };

  const bookmark = useSelector((state) => state.bookmarks.bookmarks);

  const isBookmark = () => {
    return bookmark.find((item) => item.mal_id === manga?.mal_id);
  };

  const handleBookmark = (manga) => {
    if (isBookmark()) {
      dispatch(removeBookmark(manga));
      toast.success("Removed from bookmarks!", {
        position: "top-center",
      });
    } else {
      dispatch(addBookmark(manga));
      toast.success("Added to bookmarks successfully!", {
        position: "top-center",
      });
    }
  };
  return (
    <div>
      <h1 className="text-4xl font-bold font-serif">{manga?.title}</h1>
      <h4 className="text-lg font-medium mt-2">{manga?.title_english}</h4>

      <div className="my-4 flex flex-wrap gap-4">
        <span className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-700 rounded-md shadow-md">
          {manga?.type}
        </span>
        <span className="flex items-center px-4 py-2  bg-gradient-to-r from-red-400 to-red-700 rounded-md shadow-md">
          <FaStar className=" me-2" />
          {manga?.score}
        </span>
        {manga?.volumes && (
          <span className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-700 rounded-md shadow-md">
            {manga?.volumes} Volumes
          </span>
        )}
        {manga?.chapters && (
          <span className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-700 rounded-md shadow-md">
            {manga?.chapters} Chapters
          </span>
        )}
        <span className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-700 rounded-md shadow-md">
          {manga?.status}
        </span>
      </div>

      <div className="my-4 flex items-center gap-4 ">
        <button
          onClick={() => handleFavorite(manga)}
          className="px-4 py-2 border flex items-center bg-transparent hover:border  hover:bg-white hover:text-black  duration-300 transition-all rounded-md shadow-md"
        >
          <FaHeart
            className={`${
              isFavorite() ? "text-red-500" : ""
            }  text-xl p-1 hover:bg-red-500 hover:text-white duration-300 rounded`}
          />{" "}
          Favorite
        </button>
        <button
          onClick={() => handleBookmark(manga)}
          className="px-4 py-2 flex items-center bg-transparent border border-white hover:bg-white hover:text-black transition-all rounded-md shadow-md"
        >
          <FaBookmark
            className={`${
              isBookmark() ? "text-red-500" : ""
            }  text-xl p-1 hover:bg-red-500 hover:text-white duration-300 rounded`}
          />{" "}
          {isBookmark() ? "Bookmarked" : "Bookmark"}
        </button>
      </div>

      <div className="mt-2">
        <h4 className="text-lg font-bold text-center sm:text-start">
          Synopsis
        </h4>
        <p className="text-gray-400 mt-2 mb-4 text-justify">
          {manga?.synopsis}
        </p>
      </div>
      <div className="my-4 flex flex-wrap gap-4">
        {manga?.genres?.map((genre) => (
          <span
            key={genre.mal_id}
            className="px-4 py-2 bg-red-900 rounded-md shadow-md"
          >
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MangaDetailInformation;
