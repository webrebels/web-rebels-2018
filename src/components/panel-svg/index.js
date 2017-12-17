import React from "react";

import "./index.css";

export default function PanelSvg({ title, children }) {
  return (
    <div className="panel-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="431"
        height="301"
        viewBox="0 0 431 301"
      >
        <defs>
          <linearGradient id="a" x1="50%" x2="50%" y1="24.654%" y2="126.948%">
            <stop offset="0%" stopColor="#404098" />
            <stop offset="72%" stopColor="#12122E" />
            <stop offset="100%" stopColor="#000004" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="33.721%"
            x2="67.999%"
            y1="92.249%"
            y2="3.284%"
          >
            <stop offset="0%" stopColor="#404098" stopOpacity=".3" />
            <stop offset="100%" stopColor="#30FFD0" stopOpacity=".8" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="nonzero">
          <g opacity=".6">
            <path
              fill="url(#a)"
              d="M1.04 266.6V12.2l6.9-10.26h421.98v242.11l-15.15 22.55z"
              transform="translate(0 33)"
            />
            <path
              fill="#FFF"
              d="M429.17 34.69v241.13l-14.8 22H1.79V44.43l6.54-9.74h420.84zm1.49-1.5H7.54L.3 43.97v255.38h414.87l15.5-23.07V33.21l-.01-.02z"
            />
            <path
              fill="url(#b)"
              d="M183.56 267.36H5.69L210.24 1.19h177.88z"
              opacity=".23"
              transform="translate(0 33)"
            />
          </g>
          <path
            fill="#E503D5"
            d="M7.52.52L.29 11.3v33.37l7.23-10.78h423.15V.52z"
          />
        </g>
      </svg>
    </div>
  );
}
