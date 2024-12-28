/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Container from "../../../components/Container";
import BookmarkCard from "../components/BookmarkCard";
import Grid from "../../../components/Grid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BookmarkPage = () => {
  const bookmarked = useSelector((state) => state.bookmarks.bookmarks);
  return (
    <Container>
      {bookmarked.length === 0 ? (
        <div className="flex flex-col justify-center items-center space-y-6 h-80">
          <p className="text-xl font-semibold text-gray-600">
            You haven't bookmarked any anime or manga yet.
          </p>
          <Link
            to="/"
            className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-300"
          >
            Browse More
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Your Bookmarked Anime & Manga
          </h1>
          <Grid>
            {bookmarked.map((item) => (
              <BookmarkCard key={item.mal_id} bookmarks={item} />
            ))}
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default BookmarkPage;
