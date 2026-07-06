import { useState } from "react";
import { EXAMPLE_RESUME } from "../utils";

export default function useResume() {
  const [resume, setResume] = useState(EXAMPLE_RESUME);

  const handlers = {
    personalInfo: (e) => {},
  };

  return { resume, handlers };
}
