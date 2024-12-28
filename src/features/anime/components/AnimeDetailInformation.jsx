/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { FaBookmark, FaHeart, FaPlayCircle, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  removeBookmark,
} from "../../../store/features/bookmarkSlice";
import {
  addFavorite,
  removeFavorite,
} from "../../../store/features/favoriteSlice";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AnimeDetailInformation = ({ anime }) => {
  const dispatch = useDispatch();
  const bookmark = useSelector((state) => state.bookmarks.bookmarks);
  const favorite = useSelector((state) => state.favorites.favorites);

  const isFavorite = () => {
    const { mal_id } = anime;
    return favorite.find((item) => item.mal_id === mal_id);
  };
  const isBookmark = () => {
    const { mal_id } = anime;
    return bookmark.find((item) => item.mal_id === mal_id);
  };

  const handleFavorite = (anime) => {
    if (isFavorite()) {
      dispatch(removeFavorite(anime));
      toast.success("Removed from favorites!", {
        position: "top-center",
      });
    } else {
      dispatch(addFavorite(anime));
      toast.success("Added to favorites successfully!", {
        position: "top-center",
      });
    }
  };
  const handleBookmark = (anime) => {
    if (isBookmark()) {
      dispatch(removeBookmark(anime));
      toast.success("Removed from bookmarks!", {
        position: "top-center",
      });
    } else {
      dispatch(addBookmark(anime));
      toast.success("Added to bookmarks successfully!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="p-4 text-white">
      <h1 className="text-4xl font-bold font-serif text-center sm:text-start">
        {anime?.title}
      </h1>
      <h4 className="text-lg font-medium mt-2 text-center sm:text-start">
        {anime?.title_english || "English Title Unavailable"}
      </h4>

      <div className="my-4 flex flex-wrap gap-4 justify-center sm:justify-start">
        <span className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-700 rounded-md shadow-md">
          {anime?.type || "Type N/A"}
        </span>
        <span className="flex items-center px-4 py-2 bg-gradient-to-r from-red-400 to-red-700 rounded-md shadow-md">
          <FaStar className="mr-2" />
          {anime?.score || "N/A"}
        </span>
        <span className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-700 rounded-md shadow-md">
          {anime?.episodes || "Unknown"} Episodes
        </span>
        <span className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-700 rounded-md shadow-md">
          {anime?.duration || "Duration N/A"}
        </span>
        <span className="px-4 py-2 bg-gradient-to-r from-red-400 to-red-700 rounded-md shadow-md">
          {anime?.status || "Status N/A"}
        </span>
      </div>

      <div className="my-4 flex flex-wrap gap-4 justify-center sm:justify-start">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link
                to={`${anime?.trailer?.url}`}
                target="_blank"
                className="px-4 py-2 flex items-center bg-transparent border border-white hover:bg-white hover:text-black transition-all rounded-md shadow-md"
              >
                <FaPlayCircle className="mr-2" /> Watch Trailer
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Watch Trailer On Youtube</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <button
          onClick={() => handleFavorite(anime)}
          className="px-4 py-2 flex items-center bg-transparent border border-white hover:bg-white hover:text-black transition-all rounded-md shadow-md"
        >
          <FaHeart
            className={`${
              isFavorite() ? "text-red-500" : ""
            }  text-xl p-1 hover:bg-red-500 hover:text-white duration-300 rounded`}
          />{" "}
          Favorite
        </button>
        <button
          onClick={() => handleBookmark(anime)}
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

      <div className="mt-4">
        <h4 className="text-lg font-bold text-center sm:text-start">
          Synopsis
        </h4>
        <p className="text-gray-400 mt-2 mb-4 text-justify">
          {anime?.synopsis || "Synopsis unavailable."}
        </p>
      </div>

      <div className="my-4 flex flex-wrap gap-4 justify-center sm:justify-start">
        {anime?.genres?.map((genre) => (
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

export default AnimeDetailInformation;
