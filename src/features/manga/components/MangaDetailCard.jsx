/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Container from "../../../components/Container";
import MangaDetailInformation from "./MangaDetailInformation";
import {
  useGetMangaCharactesByIdQuery,
  useGetMangaPicturesByIdQuery,
  useGetMangaRecommendationsByIdQuery,
  useGetMangaRelationsByIdQuery,
  useGetMangaReviewsByIdQuery,
} from "../../../services/endpoints/mangaEndpoints";
import MangaDetailCharacters from "./MangaDetailCharacters";
import MangaDetailRecommendation from "./MangaDetailRecommendation";
import MangaDetailReviews from "./MangaDetailReviews";
import MangaDetailPictures from "./MangaDetailPictures";
import { Link } from "react-router-dom";

const MangaDetailCard = ({ manga }) => {
  const bgImage = manga?.images?.jpg.image_url;

  const { data: characters } = useGetMangaCharactesByIdQuery(manga?.mal_id);
  const { data: recommendations } = useGetMangaRecommendationsByIdQuery(
    manga?.mal_id
  );
  const { data: reviews } = useGetMangaReviewsByIdQuery(manga?.mal_id);
  const { data: pictures } = useGetMangaPicturesByIdQuery(manga?.mal_id);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative w-full bg-cover bg-center shadow hover:shadow-md"
      >
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="relative z-10 flex justify-center items-center p-4">
          <img
            src={manga?.images?.jpg.image_url}
            alt=""
            className="hover:scale-105 transition-all w-52"
          />
        </div>
      </div>

      <Container className={"mt-4"}>
        <div className="">
          <MangaDetailInformation manga={manga} />
          {/* pictures */}
          <MangaDetailPictures pictures={pictures} />
          {/* characters */}
          <div className="p-4  rounded-lg shadow-md bg-gray-800">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-medium text-base text-white">Characters</h2>
              <Link
                to={`/manga/${manga.mal_id}/characters?title=${manga.title}`}
                className="text-sm text-gray-400 hover:text-blue-500 hover:underline duration-300"
              >
                see all
              </Link>
            </div>
            <hr className="border-red-500 mb-4" />
            <MangaDetailCharacters characters={characters} />
          </div>

          {/* recommendation */}
          <MangaDetailRecommendation recommendations={recommendations} />
          {/* reviews */}
          <MangaDetailReviews reviews={reviews} />
        </div>
      </Container>
    </div>
  );
};

export default MangaDetailCard;
