import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

const Background = () => {
  const [isDaytime, setIsDaytime] = useState(false);

  useEffect(() => {
    const getCurrentTime = () => {
      const currentHour = new Date().getHours();
      setIsDaytime(currentHour >= 6 && currentHour < 18);
    };
  
    const createStars = () => {
      const starContainer = document.querySelector(".stars");
  
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        starContainer.appendChild(star);
      }
    };
  
    getCurrentTime();
    createStars();
  }, []);

  const numStars = 50;

  const starColor = "#FFD700";
  const backgroundClass = isDaytime
    ? "background daytime"
    : "background nighttime";

  return (
    <div className={backgroundClass}>
      <div className="stars">
        {!isDaytime &&
          Array.from({ length: numStars }, (_, index) => (
            <BsFillStarFill
              key={index}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                color: starColor,
                animation: `pulse ${Math.random() * 3 + 1}s infinite`,
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.5)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          ))}
      </div>
      {!isDaytime && <div className="moon"></div>}
      {isDaytime && <div className="sun"></div>}
    </div>
  );
};

export default Background;
