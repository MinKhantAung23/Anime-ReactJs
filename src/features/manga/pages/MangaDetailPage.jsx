import { useParams } from "react-router-dom";
import { useGetMangaDetailQuery } from "../../../services/endpoints/mangaEndpoints";
import MangaDetailCard from "../components/MangaDetailCard";
import SkeletonLoader from "../../../components/SkeletonLoader";

const MangaDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetMangaDetailQuery(id, { skip: !id });

  const getManga = data?.data;

  return (
    <div>
      {isLoading ? <SkeletonLoader /> : <MangaDetailCard manga={getManga} />}
    </div>
  );
};

export default MangaDetailPage;
