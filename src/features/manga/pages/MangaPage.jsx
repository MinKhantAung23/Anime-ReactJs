import Container from "../../../components/Container";
import { useEffect, useState } from "react";
import Grid from "../../../components/Grid";
import SkeletonLoader from "../../../components/SkeletonLoader";
import { useGetMangaQuery } from "../../../services/endpoints/mangaEndpoints";
import MangaCard from "../components/MangaCard";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import AlertShow from "../../../components/AlertShow";

const MangaPage = () => {
  const [manga, setManga] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const {
    data: mangas,
    isLoading,
    error,
  } = useGetMangaQuery({
    page: currentPage,
    limit: limit,
  });

  const totalPages = mangas?.pagination.last_visible_page;

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
    if (mangas && mangas.data && mangas.data.length > 0) {
      const getManga = mangas?.data;
      setManga(getManga[Math.floor(Math.random() * getManga.length)]);
    }
  }, [mangas]);

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
            backgroundImage: `url(${manga?.images?.webp?.large_image_url})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 flex flex-col justify-center h-full">
            <h1 className="text-3xl md:text-5xl font-bold">Manga</h1>
            <p className="mt-4 text-lg md:text-xl">Manga For You</p>
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
          mangas?.data.map((manga) => (
            <MangaCard key={manga.mal_id} manga={manga} />
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

export default MangaPage;
