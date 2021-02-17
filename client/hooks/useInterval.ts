import { useRef, useEffect } from "react";

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef();

  useEffect(() => {
    // @ts-ignore
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      // @ts-ignore
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
