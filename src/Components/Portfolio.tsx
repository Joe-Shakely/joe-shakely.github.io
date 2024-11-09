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

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <div style={{ ...arrowStyle, right: "10px" }} onClick={onClick}>
    &#10095;
  </div>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <div style={{ ...arrowStyle, left: "10px" }} onClick={onClick}>
    &#10094;
  </div>
);

// Video array with id
const videos = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function Portfolio() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  // Handle next and previous slide
  const handleNext = () => {
    console.info("Next clicked");
    setActiveSlide((prev) => {
      const nextSlide = (prev + 1) % videos.length;
      console.info("New active slide (next):", nextSlide);
      return nextSlide;
    });
  };

  const handlePrev = () => {
    console.info("Prev clicked");
    setActiveSlide((prev) => {
      const prevSlide = (prev - 1 + videos.length) % videos.length;
      console.info("New active slide (prev):", prevSlide);
      return prevSlide;
    });
  };

  return (
    <section
      id="portfolio"
      className="flex flex-col w-full justify-center items-center"
    >
      <h1 className="flex w-full justify-center font-white">Portfolio</h1>

      <div className="flex w-full justify-center items-center relative">
        <PrevArrow onClick={handlePrev} />
        <video
          controls
          width="50%"
          height="50%"
          poster={`https://raw.githubusercontent.com/MessiDaGod/nfl-player-images/main/Portfolio${videos[activeSlide].id}.png`}
        >
          <source
            src={`https://raw.githubusercontent.com/MessiDaGod/nfl-player-images/main/Portfolio${videos[activeSlide].id}.mp4`}
          />
        </video>
        <NextArrow onClick={handleNext} />
      </div>
    </section>
  );
}
