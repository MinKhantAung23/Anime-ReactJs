/* eslint-disable react/prop-types */
const MangaDetailCharacters = ({ characters }) => {
  const tenCharacters = characters?.data.slice(0, 10);
  return (
    <div>
      {characters?.data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tenCharacters?.map((cha) => (
            <div
              key={cha?.character.mal_id}
              className="border rounded-lg bg-gray-700 p-3 flex flex-col sm:flex-row items-center gap-4 hover:shadow-lg hover:bg-gray-600 transition-shadow duration-300"
            >
              <img
                src={cha?.character.images.jpg.image_url}
                alt={cha?.character.name}
                className="w-16 h-16 rounded-full object-cover border border-gray-600"
              />
              <div className="text-center sm:text-left">
                <h6 className="text-sm font-medium text-white">
                  {cha?.character.name}
                </h6>
                <p className="text-xs text-gray-300">{cha?.role}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No characters found.</p>
      )}
    </div>
  );
};

export default MangaDetailCharacters;
