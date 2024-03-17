import React from "react";
import "./Equalibrium.css";
import cubeImg from "./images/crytsal-blue-cube-art.jpg";
import diamond from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import human from "./images/824020f81e73466f4ae106d2359a21e5.png";

const Equalibrium = () => {
  return (
    <div className="container">
      <div className="equalibrium-container">
        <img alt="Cube img" src={cubeImg} className="cube" />
        <h1 className="heading">Equilibrium #3429</h1>
        <p className="about">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="main-container">
          <div className="eth-container">
            <img src={diamond} alt="ethereum img" />
            <p className="eth-amount">0.041 ETH</p>
          </div>
          <div className="clock-container">
            <img src={clock} alt="clock img" />
            <p className="left-days">3 days left</p>
          </div>
        </div>
        <hr />
        <div className="human-section">
          <img src={human} alt="boy img" className="human" />
          <p className="about-human">
            Creation of <span className="name">Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Equalibrium;
