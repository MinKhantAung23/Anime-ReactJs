import { useGetTopMangaQuery } from "../../../services/endpoints/mangaEndpoints";
import MangaCard from "../../manga/components/MangaCard";
import Grid from "../../../components/Grid";
import SkeletonLoader from "../../../components/SkeletonLoader";
import { Link } from "react-router-dom";
import AlertShow from "../../../components/AlertShow";

const ShowManga = () => {
  const {
    data: mangaData,
    isLoading,
    error,
  } = useGetTopMangaQuery({ page: 1, limit: 10 });

  if (error) {
    return <AlertShow errorMessage={error.message} />;
  }
  return (
    <div className="my-10">
      {isLoading ? (
        <Grid>
          {Array.from({ length: 10 }).map((_, idx) => (
            <SkeletonLoader key={idx} />
          ))}
        </Grid>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-red-600">Manga List</h2>
            <Link
              to={"/top/manga"}
              className="text-sm text-gray-400 hover:text-blue-500 hover:underline duration-300"
            >
              see all
            </Link>
          </div>
          <Grid>
            {mangaData?.data.map((manga) => (
              <MangaCard key={manga.mal_id} manga={manga} />
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ShowManga;
