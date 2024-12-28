/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ExternalLinkIcon } from "lucide-react";

const EpisodesVideoCard = ({ video }) => {
  const navigate = useNavigate();
  const { entry, episodes } = video;

  const handleDetail = (id) => {
    navigate(`/anime/${id}?title=${entry.title}`);
  };

  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="p-4">
      <div
        className="relative w-full h-[250px] aspect-[3/5] border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
        key={entry.mal_id}
      >
        <img
          src={entry.images.webp.image_url}
          alt={entry.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white font-semibold px-2 py-1">
          <h1
            className="truncate  hover:text-blue-500 duration-300"
            onClick={() => handleDetail(entry.mal_id)}
          >
            {entry.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 w-full bg-black bg-opacity-75 text-white text-sm px-2 py-1">
          {episodes.map((ep) => (
            <div
              key={ep.mal_id}
              className="flex justify-between items-center py-1 border-b border-gray-700 last:border-none"
            >
              <a
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline truncate"
              >
                {ep.title}
              </a>
              <span className="text-xs text-gray-400">
                {ep.premium ? "Premium" : ""}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 text-center ">
        <Button
          className="text-sm text-blue-500 hover:underline"
          onClick={() => handleLinkClick(entry.url)}
        >
          <ExternalLinkIcon className="w-4 h-4 inline-block mr-1" /> External
          Link
        </Button>
      </div>
    </div>
  );
};

export default EpisodesVideoCard;
