/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Container from "../../../components/Container";
import AnimeDetailInformation from "./AnimeDetailInformation";
import {
  useGetAnimeCharacterByIdQuery,
  useGetAnimePicturesByIdQuery,
  useGetAnimeRecommendationsByIdQuery,
  useGetAnimeReviewsByIdQuery,
} from "../../../services/endpoints/animeEndpoints";
import AnimeDetailCharacters from "./AnimeDetailCharacters";
import AnimeDetailRecommendation from "./AnimeDetailRecommendation";
import AnimeDetailReviews from "./AnimeDetailReviews";
import AnimeDetailPictures from "./AnimeDetailPictures";
import Spinner from "../../../components/Spinner";
import { Link } from "react-router-dom";

const AnimeDetailCard = ({ anime }) => {
  const bgImage = anime?.images?.jpg.image_url;

  const { data: characters, isLoading: charactersLoading } =
    useGetAnimeCharacterByIdQuery(anime.mal_id);
  const { data: recommendations, isLoading: recommendationsLoading } =
    useGetAnimeRecommendationsByIdQuery(anime.mal_id);
  const { data: reviews, isLoading: reviewsLoading } =
    useGetAnimeReviewsByIdQuery(anime.mal_id);

  const { data: pictures, isLoading: picturesLoading } =
    useGetAnimePicturesByIdQuery(anime.mal_id);
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative w-full h-96 bg-cover bg-center rounded-lg shadow hover:shadow-lg transition-all duration-300"
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-lg"></div>

        <div className="relative z-10 flex justify-center items-center h-full">
          <img
            src={anime?.images?.jpg.image_url}
            alt={anime?.title || "Anime Image"}
            className="w-52 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <Container className={"mt-4"}>
        {charactersLoading ||
        recommendationsLoading ||
        reviewsLoading ||
        picturesLoading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <>
            <AnimeDetailInformation anime={anime} />
            {/* pictures */}
            <AnimeDetailPictures pictures={pictures} />
            {/* characters */}{" "}
            <div className="p-4  rounded-lg shadow-md bg-gray-800">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-medium text-base text-white">
                  Characters & Voice Actors
                </h2>
                <Link
                  to={`/anime/${anime.mal_id}/characters?title=${anime.title}`}
                  className="text-sm text-gray-400 hover:text-blue-500 hover:underline duration-300"
                >
                  see all
                </Link>
              </div>
              <hr className="border-red-500 mb-4" />
              <AnimeDetailCharacters characters={characters} />
            </div>
            {/* recommendation */}
            <AnimeDetailRecommendation recommendations={recommendations} />
            {/* reviews */}
            <AnimeDetailReviews reviews={reviews} />
          </>
        )}
      </Container>
    </div>
  );
};

export default AnimeDetailCard;
