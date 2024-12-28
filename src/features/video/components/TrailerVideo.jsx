/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlayIcon } from "lucide-react";

const TrailerVideo = ({ promo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrailerUrl, setCurrentTrailerUrl] = useState("");

  const showModal = (url) => {
    setCurrentTrailerUrl(url);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentTrailerUrl("");
  };

  console.log(promo);
  return (
    <div className="p-4">
      <div
        className="relative inline-block w-full h-[250px] aspect-[3/5] border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
        key={promo?.entry.mal_id}
      >
        <img
          alt="trailer thumbnail"
          src={promo?.entry.images.webp.image_url}
          className="h-[200px] w-full object-cover"
        />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white font-semibold px-2 py-1">
          <h1 className="truncate">{promo?.title}</h1>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={() => showModal(promo?.trailer.embed_url)}
        >
          <PlayIcon className="w-12 h-12 text-white" />
        </div>
      </div>

      <div className="mt-2 text-center">
        <Link
          to={promo?.trailer.url}
          target="_blank"
          className="inline-flex items-center text-blue-500 font-medium hover:underline"
        >
          Watch Trailer
        </Link>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{promo.entry.title}</DialogTitle>
          </DialogHeader>
          <iframe
            width="400px"
            height="400px"
            src={currentTrailerUrl}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer"
            className="rounded-lg shadow-md"
          ></iframe>
          <div className="mt-4 text-right">
            <Button variant="outline" onClick={handleCancel}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TrailerVideo;
