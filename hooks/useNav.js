import { useState, useEffect, useCallback } from "react";
import { useWindowSize } from "../hooks/useWindow";
export const useNav = () => {
  const [y, setY] = useState(0); //scroll state
  const { width } = useWindowSize();
  const [toggle, setToggle] = useState(false); //nav state

  const ShowItems = () => {
    setToggle(!toggle);
  };

  const handleNavigation = useCallback(() => {
    setY(window.scrollY);
    setToggle(false);
    if (width >= 1000) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [y]); //detect scroll
  useEffect(() => {
    if (width >= 1000) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [width]);
  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return [y, toggle, width, ShowItems];
};
