/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import BgImage from "../../../assets/naruto.jpg";
import Container from "../../../components/Container";
const HeroSection = () => {
  const bgImage = BgImage;
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <Container>
        {/* Hero content */}
        <div className="relative z-10 text-center text-gray-400 p-12">
          <h1 className="text-4xl font-bold mb-4 ">
            Welcome to{" "}
            <span className="text-red-700 font-bold">RedCloudHub</span>
          </h1>
          <p className="text-lg mb-6">
            Dive into the world of anime where passion and creativity come to
            life! Explore new shows, discover hidden gems, and become part of a
            vibrant community of anime lovers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-transparent backdrop-blur border border-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                Top Manga
              </h3>
              <p className="text-sm mb-4">
                Explore the world of manga and discover your favorite manga
                series.
              </p>
              <Link
                to={"/top/manga"}
                className="mt-2 border px-4 py-2 border-yellow-600 rounded-md text-yellow-600 hover:bg-yellow-600 hover:text-white transition-colors"
              >
                Manga
              </Link>
            </div>

            <div className="bg-transparent backdrop-blur border border-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                Trending Anime
              </h3>
              <p className="text-sm mb-4">
                Stay up-to-date with the latest trending anime shows and never
                miss out on what's hot!
              </p>
              <Link
                to={"/top/anime"}
                className="mt-2 border px-4 py-2 border-yellow-600 rounded-md text-yellow-600 hover:bg-yellow-600 hover:text-white transition-colors"
              >
                Anime
              </Link>
            </div>

            <div className="bg-transparent backdrop-blur border border-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                Most Popular Characters
              </h3>
              <p className="text-sm mb-4">
                Discover the most popular characters in the world of anime and
                manga.
              </p>
              <Link
                to={"/top/characters"}
                className="mt-2 border px-4 py-2 border-yellow-600 rounded-md text-yellow-600 hover:bg-yellow-600 hover:text-white transition-colors"
              >
                Characters
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
