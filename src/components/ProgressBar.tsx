'use client'
import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = Math.round((scrollTop / scrollHeight) * 100);
      setScrollPercentage(progress);
    }, 50); 

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" transition-all duration-300 bg-white dark:bg-black" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "5px", zIndex: 1000 }}>
      <div className="bg-rose-500 transition-all duration-300" style={{ height: "100%", width: `${scrollPercentage}%`, transition: "width 0.25s ease" }} />
    </div>
  );
};

export default ProgressBar;
