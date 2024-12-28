/* eslint-disable react/prop-types */

const MangaDetailReviews = ({ reviews }) => {
  return (
    <div className="p-6 mb-4 mt-8 bg-gray-800 rounded-lg shadow-md text-white">
      <h2 className="text-lg font-semibold mb-4">User Reviews</h2>

      <div className="space-y-6">
        {reviews?.data.length > 0 ? (
          reviews?.data.slice(0, 10).map((review) => (
            <div
              key={review.mal_id}
              className="p-6 bg-gray-900 rounded-lg shadow-md text-white"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.user.images.jpg.image_url}
                  alt={review.user.username}
                  className="w-10 h-10 rounded-full border border-gray-600 mr-3"
                />
                <div>
                  <a
                    href={review.user.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {review.user.username}
                  </a>
                  <small className="block text-gray-400 text-xs">
                    {new Date(review.date).toLocaleDateString()}
                  </small>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg font-semibold">
                  Score: {review.score}
                </span>
                <span className="ml-2 text-gray-400 text-sm">
                  {review.tags.join(", ")}
                </span>
              </div>

              <p className="text-gray-300 text-sm mb-4">
                {review.review.length > 300
                  ? `${review.review.slice(0, 300)}...`
                  : review.review}
                <a
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline ml-1"
                >
                  Read more
                </a>
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default MangaDetailReviews;
