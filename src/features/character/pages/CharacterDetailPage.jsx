import { useParams } from "react-router-dom";
import { useGetCharacterDetailQuery } from "../../../services/endpoints/characterEndpoints";
import CharacterDetailCard from "../components/CharacterDetailCard";
import Spinner from "../../../components/Spinner";

const CharacterDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetCharacterDetailQuery(id, { skip: !id });
  const character = data?.data;

  return (
    <>
      {isLoading ? <Spinner /> : <CharacterDetailCard character={character} />}
    </>
  );
};

export default CharacterDetailPage;
