import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useHover = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true);
      },
      onMouseOut() {
        setHovered(false);
      },
    }),
    []
  );

  return [hovered, eventHandlers];
};

export function ScrollToTop() {
  const { pathname } = useLocation();

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
