// Loading.js
import React from "react";
import "../css/Loading.css"; // Asegúrate de crear este archivo CSS

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Loading;
