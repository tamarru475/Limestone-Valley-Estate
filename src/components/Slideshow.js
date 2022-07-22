import React from "react";
import alpaka from "../images/alpaka.jpg";
import birdFly from "../images/bird-fly.jpg";
import butterfly from "../images/butterfly.jpg";
import rainbow from "../images/rainbow.jpg";
import sunset1 from "../images/sunset-horizonatal.jpg";
import sunsetLeaf from "../images/sunset-leaf.jpg";
import sunset2 from "../images/sunset-main.jpg";
import titou from "../images/titou.jpg";

const photos = [
  { photo: alpaka, title: "Max, Leo and Roger", id: "1" },
  { photo: sunset1, title: "Amazing sunset", id: "2" },
  { photo: birdFly, title: "Silvereye", id: "3" },
  { photo: butterfly, title: "Butterflys", id: "4" },
  { photo: sunset2, title: "Sunset", id: "5" },
  { photo: rainbow, title: "Our farm house", id: "6" },
  { photo: sunsetLeaf, title: "Our statues", id: "7" },
  { photo: titou, title: "Titou", id: "8" },
];

const delay = 5000;

export default function SlideShow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="gallery__slideshow slideshow">
      <div
        className="slideshow__slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {photos.map((photo) => (
          <div
            className="slide"
            key={photo.id}
            style={{ background: `url(${photo.photo}) no-repeat center/cover` }}
          ></div>
        ))}
      </div>
      <div className="slideshow__dots">
        {photos.map((_, idx) => (
          <div
            key={idx}
            className={`slideshow__dot ${
              index === idx ? " slideshow__dot-active" : ""
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
