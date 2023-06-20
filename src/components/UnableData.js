import React from "react";
import unable_img from "../404.webp";

const NotFound = () => {

  return (
    <div className="not-found-container d-flex flex-column align-items-center justify-content-center">
      <img
        className="not-found-image img-fluid"
        src={unable_img}
        alt="404 Illustration"
      />
      <a
        className="not-found-link btn btn-primary"
        href="/"
      >
       Try Again
      </a>
    </div>
  );
};

export default NotFound;
