import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-component">
      <div className="main-name">DMITRY &#10022; YURI</div>
      <img
        src="/main.jpg"
        alt="wedding"
        className="main-img"
        width="92%"
        height="100%"
      />
      <div className="main-text-box">
        <div className="main-time">2024년 6월 1일 (토) 오후 5시 30분</div>
        <div className="main-place">판교 W스퀘어컨벤션 L층 그레이스홀</div>
      </div>
    </div>
  );
};

export default Main;
