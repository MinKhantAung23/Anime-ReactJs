import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useWatchRecentQuery } from "../../../services/endpoints/watchVideoEndpoints";
import EpisodesVideoCard from "../components/EpisodeVideoCard";
import Grid from "../../../components/Grid";
import SkeletonLoader from "../../../components/SkeletonLoader";
import Container from "../../../components/Container";
import Pagination from "../../../components/Pagination";
import AlertShow from "../../../components/AlertShow";

const PopularEpisodePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data, isLoading, error } = useWatchRecentQuery({
    page: currentPage,
    limit: limit,
  });

  const totalPages = data?.pagination.last_visible_page;

  useEffect(() => {
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    setCurrentPage(page);
    setLimit(limit);
  }, [searchParams]);

  const handlePageChange = (page) => {
    setSearchParams({ page, limit });
  };

  if (error) return <AlertShow errorMessage={error.status} />;
  return (
    <Container>
      {isLoading ? (
        <Grid>
          {Array.from({ length: 10 }).map((_, idx) => (
            <SkeletonLoader key={idx} />
          ))}
        </Grid>
      ) : (
        <div>
          <h1 className="text-center font-bold text-2xl text-white font-serif underline my-4">
            Popular Episodes
          </h1>
          <Grid>
            {data?.data.map((video) => (
              <EpisodesVideoCard key={video.entry.mal_id} video={video} />
            ))}
          </Grid>
          {!isLoading && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </Container>
  );
};

export default PopularEpisodePage;
