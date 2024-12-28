/* eslint-disable react/prop-types */

const CharacterDetailCard = ({ character }) => {
  return (
    <div className="min-h-screen bg-black p-6 text-gray-100">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src={character?.images.webp.image_url}
              alt={character?.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-2/3 p-6">
            <h1 className="text-4xl font-bold text-white mb-4">
              {character?.name}
            </h1>
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              {character?.name_kanji}
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              {character?.about || "No description available."}
            </p>

            <div className="mt-6 space-y-4">
              {character?.nicknames?.length > 0 && (
                <div>
                  <span className="font-semibold text-gray-200">
                    Nicknames:
                  </span>{" "}
                  <span className="text-gray-400">
                    {character.nicknames.join(", ")}
                  </span>
                </div>
              )}
              <div>
                <span className="font-semibold text-gray-200">Favorites:</span>{" "}
                <span className="text-gray-400">
                  {character?.favorites || 0}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailCard;
