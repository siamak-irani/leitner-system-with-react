import { useEffect, useState } from "react";

const defaultConfig = {
  visibilityThreshold: 1,
  // At what percentage of the display screen is the element visible?
  // 0 means the top edge of the screen
  // 1 means the bottom edge of the screen
  depthLevel: 0,
  // Visibility of the element is calculated based on what percentage of its depth?
  // 0 means the distance from the top edge of the element is the benchmark
  // 1 means the distance from the bottom edge of the element is the benchmark
};

const useVisibilityStatus = (
  parrentRef: React.RefObject<HTMLDivElement>,
  elementRef: React.RefObject<HTMLOListElement>,
  config = defaultConfig
) => {
  let parrentHeight = 0;
  if (parrentRef.current) parrentHeight = parrentRef.current?.clientHeight;

  const [distanceFromTop, setDistanceFromTop] = useState(Infinity);

  const [seen, setSeen] = useState(false);
  const [inView, setInView] = useState(false);

  let elementHeight: number;
  if (elementRef.current) {
    elementHeight = elementRef.current.scrollHeight;
  }

  useEffect(() => {
    const scrollHandler = () => {
      if (elementRef.current && parrentRef.current) {
        setDistanceFromTop(
          Math.ceil(elementRef.current.getBoundingClientRect().top) -
            Math.ceil(parrentRef.current.getBoundingClientRect().top) +
            Math.ceil(elementRef.current.clientHeight * config.depthLevel) -
            1
        );
      }
    };
    parrentRef.current?.addEventListener("scroll", scrollHandler);
    return () => {
      parrentRef.current?.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    setSeen((prev) => {
      return !prev
        ? distanceFromTop <= parrentHeight * config.visibilityThreshold
        : true;
    });
    if (elementRef.current) {
      setInView(
        elementRef.current.getBoundingClientRect().top - elementHeight <= 0 &&
          elementRef.current.getBoundingClientRect().bottom >= 0
      );
    }
  }, [distanceFromTop]);

  //   console.log(distanceFromTop, parrentHeight);
  //   console.log(distanceFromTop <= parrentHeight * config.visibilityThreshold);
  //   console.log(seen);

  return { seen, setSeen, inView };
};

export default useVisibilityStatus;
