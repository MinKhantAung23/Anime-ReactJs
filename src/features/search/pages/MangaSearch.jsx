import { useState } from "react";
import { useSearchMangaQuery } from "../../../services/endpoints/searchEndpoints";
import Container from "../../../components/Container";
import Grid from "../../../components/Grid";
import { FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { XCircleIcon } from "lucide-react";
import AlertShow from "../../../components/AlertShow";
import MangaCard from "../../manga/components/MangaCard";

const MangaSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { data, error, isLoading } = useSearchMangaQuery(search, {
    skip: !search,
  });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearch(inputValue.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setInputValue("");
    setSearch("");
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (error) return <AlertShow errorMessage={error.status} />;

  return (
    <Container>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-bold mb-4">Manga Search</h1>
        <button onClick={handleBack} className="underline">
          <FaBackward className="mr-1 inline-flex" /> Back
        </button>
      </div>
      <div className="relative flex items-center gap-2">
        <input
          type="text"
          placeholder="Search manga..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="border p-2 rounded-md text-black flex-grow"
        />
        {inputValue && (
          <XCircleIcon
            className="absolute right-24 hover:text-red-500 transform text-gray-500 cursor-pointer"
            onClick={clearSearch}
          />
        )}
        <button
          onClick={handleSearch}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
        >
          Search
        </button>
      </div>
      {isLoading && <p className="mt-4 text-gray-500">Loading...</p>}
      {error && (
        <p className="mt-4 text-red-500">Error fetching search data.</p>
      )}

      {data?.data?.length === 0 && (
        <p className="mt-4 text-gray-500">No manga found.</p>
      )}

      <Grid className={"mb-4 mt-6"}>
        {data?.data?.map((manga) => (
          <MangaCard key={manga.mal_id} manga={manga} />
        ))}
      </Grid>
    </Container>
  );
};

export default MangaSearch;
