/* eslint-disable react/prop-types */

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaExclamationTriangle } from "react-icons/fa";

export default function AlertShow({ errorMessage }) {
  return (
    <Alert variant="destructive" className="my-8 flex items-center">
      <FaExclamationTriangle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{errorMessage}</AlertDescription>
    </Alert>
  );
}
