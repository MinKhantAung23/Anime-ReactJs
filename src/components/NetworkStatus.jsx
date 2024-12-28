/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { HiInformationCircle } from "react-icons/hi";

const NetworkStatus = () => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      toast.dismiss("offline");
    };

    const handleOffline = () => {
      setIsOffline(true);
      toast.error(
        (t) => (
          <div className="flex items-center">
            <HiInformationCircle className="mr-2" size={20} />
            <div className="text-red-500">
              <span className="font-medium">Alert:</span> You are offline now.
            </div>
          </div>
        ),
        {
          id: "offline",
          duration: Infinity,
          position: "bottom-right",
          className: "bg-red-500 text-white",
        }
      );
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <></>;
};

export default NetworkStatus;
