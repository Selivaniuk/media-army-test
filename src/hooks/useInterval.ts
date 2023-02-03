import { useEffect, useRef } from "react";

export const useInterval = (callback: () => void, delay: number | null) => {
  const intervalRef = useRef<NodeJS.Timeout | null>();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === "number") {
      intervalRef.current = setInterval(() => callbackRef.current(), delay);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [delay]);

  return intervalRef;
};
