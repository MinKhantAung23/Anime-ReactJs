/* eslint-disable react/prop-types */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeBookmark } from "../store/features/bookmarkSlice";
import { removeFavorite } from "../store/features/favoriteSlice";
import { FaBookmark, FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";

const DeleteConfirm = ({ item, isBookmark = false }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  // Open the dialog
  const openDialog = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  // Close the dialog
  const closeDialog = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  const handleRemoveFavorite = (e, item) => {
    e.stopPropagation();

    if (isBookmark) {
      dispatch(removeBookmark(item));
      toast.success("Removed from bookmarks!", {
        position: "top-center",
      });
    } else {
      dispatch(removeFavorite(item));
      toast.success("Removed from favorites!", {
        position: "top-center",
      });
    }
    closeDialog(e);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger
        onClick={(e) => openDialog(e)}
        className="flex items-center text-red-500 hover:text-red-600 hover:underline duration-300"
      >
        {isBookmark ? (
          <FaBookmark className="mr-1 text-red-400" />
        ) : (
          <FaHeart className="mr-1 text-red-400" />
        )}
        Remove
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to delete?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => closeDialog(e)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={(e) => handleRemoveFavorite(e, item)}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirm;
