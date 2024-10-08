// src/components/Start.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";
import logo from "../assets/spam_logo.png";

const Start = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/instructions");
  };

  return (
    <div className="Stacontainer">
      <img src={logo} alt="SpamNeCut Logo" className="Stalogo" />
      <h1 className="StaStatitle">스팸네컷</h1>
      <button className="Stabutton" onClick={handleStartClick}>
        시작하기
      </button>
    </div>
  );
};

export default Start;
