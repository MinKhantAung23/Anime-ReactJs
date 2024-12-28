/* eslint-disable react/prop-types */
const AnimeDetailCharacters = ({ characters }) => {
  const tenCharacters = characters?.data.slice(0, 10);

  return (
    <div>
      {characters?.data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tenCharacters?.map((cha) => (
            <div
              key={cha?.character.mal_id}
              className="border rounded-md p-2 flex flex-col sm:flex-row justify-between items-center hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4 sm:mb-0 sm:w-64 items-center">
                <img
                  src={cha?.character.images.jpg.image_url}
                  alt={cha?.character.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ms-2">
                  <h6 className="text-sm font-semibold">
                    {cha?.character.name}
                  </h6>
                  <small className="text-xs text-gray-500">{cha?.role}</small>
                </div>
              </div>

              {cha?.voice_actors
                ?.filter((actor) => actor.language === "Japanese")
                .map((actor) => (
                  <div
                    key={actor?.person.mal_id}
                    className="flex items-center sm:w-64 justify-end"
                  >
                    <div className="me-2 text-end">
                      <h6 className="text-sm font-semibold">
                        {actor?.person.name}
                      </h6>
                      <small className="text-xs text-gray-500">
                        {actor?.language}
                      </small>
                    </div>
                    <img
                      src={actor?.person.images.jpg.image_url}
                      alt={actor?.person.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No characters found.</p>
      )}
    </div>
  );
};

export default AnimeDetailCharacters;
