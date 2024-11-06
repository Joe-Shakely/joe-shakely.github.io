/* eslint-disable jsx-a11y/alt-text */
import React, { CSSProperties } from "react";

// Custom arrow style
const arrowStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "30px",
  zIndex: 1,
  cursor: "pointer",
  color: "white",
  backgroundColor: "black",
  borderRadius: "50%",
  border: "2px solid",
  borderColor: "white",
  padding: "10px",
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      style={{ ...arrowStyle, right: "10px" }}
      onClick={onClick}
      className="cursor-pointer"
    >
      &#10095;
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      style={{ ...arrowStyle, left: "10px" }}
      onClick={onClick}
      className="cursor-pointer"
    >
      &#10094;
    </div>
  );
};

// Add your video components here
const videos: string[] = [
  "Custom Yardi Payable Interface PDF to Yardi ETL and Upload via SFTP #yardi.mp4",
  "Yardi Commercial Lease Abstract Excel to ETL.mp4",
  "Import Invoice Yardi API 1.mp4",
];

export default function Portfolio() {
  return (
    <section>
      <h1 className="flex w-full justify-center font-white">Portfolio</h1>

      {videos.map((video, index) => {
        const id = index + 1;
        return (
          <div key={id} className="p-4">
            <PrevArrow />
            <video
              controls
              width="50%"
              height="50%"
              poster={`https://raw.githubusercontent.com/MessiDaGod/nfl-player-images/main/Portfolio${id}.png`}
            >
              <source
                src={`https://raw.githubusercontent.com/MessiDaGod/nfl-player-images/main/${video}`}
              />
            </video>
            <NextArrow />
          </div>
        );
      })}
    </section>
  );
}
