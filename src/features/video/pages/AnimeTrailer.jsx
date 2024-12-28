/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useWatchTrailerQuery } from "../../../services/endpoints/watchVideoEndpoints";
import TrailerVideo from "../components/TrailerVideo";
import Grid from "../../../components/Grid";
import Container from "../../../components/Container";
import SkeletonLoader from "../../../components/SkeletonLoader";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import AlertShow from "../../../components/AlertShow";

const AnimeTrailersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading, error } = useWatchTrailerQuery({
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
            Anime Trailers
          </h1>
          <Grid className={"place-items-center"}>
            {data?.data?.map((promo) => (
              <TrailerVideo promo={promo} key={promo.entry.mal_id} />
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

export default AnimeTrailersPage;
