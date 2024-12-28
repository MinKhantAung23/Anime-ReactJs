import { useGetAnimeCharacterByIdQuery } from "../../../services/endpoints/animeEndpoints";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../../../components/Container";
import Spinner from "../../../components/Spinner";

const AnimeDetailAllCharacter = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetAnimeCharacterByIdQuery(id);
  const characters = data?.data;
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <Container className={"my-4"}>
      <div className="flex justify-between items-center my-4">
        <h2 className="text-2xl font-bold ">
          Characters List {!isLoading && `(${data?.data.length})`}
        </h2>
        <button
          onClick={handleNavigate}
          className="text-md px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          back
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {characters?.map((cha) => (
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
                <div className=" flex flex-col items-start ms-2">
                  <Link
                    to={`/character/${cha?.character.mal_id}`}
                    className="text-sm font-semibold hover:text-blue-500 hover:underline duration-300"
                  >
                    {cha?.character.name}
                  </Link>
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
      )}
    </Container>
  );
};

export default AnimeDetailAllCharacter;
