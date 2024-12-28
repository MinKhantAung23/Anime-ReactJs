import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCharactersQuery } from "../../../services/endpoints/characterEndpoints";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { useEffect, useState } from "react";
import Pagination from "../../../components/Pagination";
import AlertShow from "../../../components/AlertShow";

const CharacterTable = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const {
    data: characters,
    isLoading,
    error,
  } = useGetCharactersQuery({
    page: currentPage,
    limit: limit,
  });

  const totalPages = characters?.pagination.last_visible_page;

  useEffect(() => {
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 20;
    setCurrentPage(page);
    setLimit(limit);
  }, [searchParams]);

  const handlePageChange = (page) => {
    setSearchParams({ page, limit });
  };

  const handleCharacter = (character) => {
    const id = character?.mal_id;
    navigate(`/character/${id}?name=${character?.name}`);
  };

  if (error) return <AlertShow errorMessage={error.status} />;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="my-4">
          <Table className="mt-4">
            <TableCaption>
              A list of most popular characters according to MAL.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-lg ">Image</TableHead>
                <TableHead className="font-bold text-lg text-center">
                  Name
                </TableHead>
                <TableHead className="font-bold text-lg text-center">
                  Favorite
                </TableHead>
                <TableHead className="font-bold text-lg text-center">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {characters?.data?.map((character) => (
                <TableRow key={character?.mal_id}>
                  <TableCell className="text-center">
                    <img
                      className="w-20 h-20 rounded-full object-cover "
                      src={character?.images?.jpg?.image_url}
                      alt={character?.name}
                    />
                  </TableCell>
                  <TableCell className="text-center">
                    {character?.name}
                  </TableCell>
                  <TableCell className="text-center">
                    {character?.favorites}
                  </TableCell>{" "}
                  <TableCell className="text-center">
                    <button
                      onClick={() => handleCharacter(character)}
                      className="text-meduium text-gray-400 px-4 py-2  bg-black hover:text-blue-500 hover:underline duration-300"
                    >
                      <FaArrowRight />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {!isLoading && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default CharacterTable;
