import Container from "../../../components/Container";
import AnimeCard from "../components/AnimeCard";
import { useGetUpcomingAnimeQuery } from "../../../services/endpoints/animeEndpoints";
import { useEffect, useState } from "react";
import Grid from "../../../components/Grid";
import SkeletonLoader from "../../../components/SkeletonLoader";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import AlertShow from "../../../components/AlertShow";

const UpcomingAnimePage = () => {
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const {
    data: upcomingAnime,
    isLoading,
    error,
  } = useGetUpcomingAnimeQuery({
    page: currentPage,
    limit: limit,
  });

  const totalPages = upcomingAnime?.pagination.last_visible_page;

  useEffect(() => {
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 20;
    setCurrentPage(page);
    setLimit(limit);
  }, [searchParams]);

  const handlePageChange = (page) => {
    setSearchParams({ page, limit });
  };

  useEffect(() => {
    if (upcomingAnime && upcomingAnime.data && upcomingAnime.data.length > 0) {
      const movies = upcomingAnime.data;
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    }
  }, [upcomingAnime]);

  if (error) {
    return <AlertShow errorMessage={error.status} />;
  }
  return (
    <Container>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div
          className="relative w-full h-[300px] mt-2 mb-4 bg-cover bg-center text-white rounded-lg shadow-md overflow-hidden"
          style={{
            backgroundImage: `url(${movie?.images?.webp?.large_image_url})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 flex flex-col justify-center h-full">
            <h1 className="text-3xl md:text-5xl font-bold">Upcoming Anime</h1>
            <p className="mt-4 text-lg md:text-xl">
              Upcoming Anime For Next Season
            </p>
          </div>
        </div>
      )}

      <Grid className={"mt-4"}>
        {isLoading ? (
          <>
            {Array.from({ length: 10 }).map((_, idx) => (
              <SkeletonLoader key={idx} />
            ))}
          </>
        ) : (
          upcomingAnime?.data.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))
        )}
      </Grid>
      {!isLoading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </Container>
  );
};

export default UpcomingAnimePage;
