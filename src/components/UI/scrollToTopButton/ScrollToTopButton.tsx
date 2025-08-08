import React, { useState } from "react";
import "./ScrollToTopButton.scss";


const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={"toTopButton"}
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <ToTopIcon />
    </button>
  );
};

export default ScrollToTopButton;
