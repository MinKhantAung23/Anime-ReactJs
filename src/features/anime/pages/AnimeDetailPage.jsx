import { useParams } from "react-router-dom";
import AnimeDetailCard from "../components/AnimeDetailCard";
import { useGetAnimeDetailQuery } from "../../../services/endpoints/animeEndpoints";
import SkeletonLoader from "../../../components/SkeletonLoader";

const AnimeDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetAnimeDetailQuery(id, { skip: !id });

  const getAnime = data?.data;
  return (
    <div>
      {isLoading ? <SkeletonLoader /> : <AnimeDetailCard anime={getAnime} />}
    </div>
  );
};

export default AnimeDetailPage;
