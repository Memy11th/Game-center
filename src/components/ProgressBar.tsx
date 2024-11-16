'use client'

import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
  }, []);

  return (
    <div style={styles.container}>
      <div className=" bg-rose-500" style={{ ...styles.bar, width: `${scrollPercentage}%` }} />
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "5px",
    backgroundColor: "#f3f3f3",
    zIndex: 1000,
  },
  bar: {
    height: "100%",
    transition: "width 0.25s ease",
  },
};

export default ProgressBar;
