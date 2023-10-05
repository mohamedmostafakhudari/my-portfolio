import { RefObject, useEffect, useRef } from "react";

export const useDimensions = (ref: RefObject<HTMLDivElement>
) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) throw Error("ref is not assigned");

    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);
  return dimensions.current;
}