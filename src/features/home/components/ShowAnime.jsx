import { useGetTopAnimeQuery } from "../../../services/endpoints/animeEndpoints";
import AnimeCard from "../../anime/components/AnimeCard";
import Grid from "../../../components/Grid";
import SkeletonLoader from "../../../components/SkeletonLoader";
import { Link } from "react-router-dom";
import AlertShow from "../../../components/AlertShow";

const ShowAnime = () => {
  const {
    data: animeData,
    isLoading,
    error,
  } = useGetTopAnimeQuery({ page: 1, limit: 10 });

  if (error) {
    return <AlertShow errorMessage={error.status} />;
  }
  return (
    <div className="my-4">
      {isLoading ? (
        <Grid>
          {Array.from({ length: 10 }).map((_, idx) => (
            <SkeletonLoader key={idx} />
          ))}
        </Grid>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-red-600">Anime List</h2>
            <Link
              to={"/top/anime"}
              className="text-sm text-gray-400 hover:text-blue-500 hover:underline duration-300"
            >
              see all
            </Link>
          </div>
          <Grid>
            {animeData?.data.map((anime) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ShowAnime;
