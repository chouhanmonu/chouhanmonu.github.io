import { useEffect, useRef, useState } from "react";

let lastTop = null;
export function useIsIntersecting(options = {}) {
  const ref = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentTop = entry.boundingClientRect.top;
        if (entry.isIntersecting && lastTop !== null && currentTop < lastTop) {
          setIsInViewport(entry.isIntersecting);
          observer.unobserve(entry.target);
        }

        lastTop = currentTop;
      },
      {
        root: null,
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return [ref, isInViewport];
}
