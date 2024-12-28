import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../../../components/Container";
import Spinner from "../../../components/Spinner";
import { useGetMangaCharactesByIdQuery } from "../../../services/endpoints/mangaEndpoints";

const MangaDetailAllCharacter = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetMangaCharactesByIdQuery(id);
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {characters?.map((cha) => (
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
                <Link
                  to={`/character/${cha?.character.mal_id}`}
                  className="text-sm font-semibold hover:text-blue-500 hover:underline duration-300"
                >
                  {cha?.character.name}
                </Link>
                <p className="text-xs text-gray-300">{cha?.role}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default MangaDetailAllCharacter;
