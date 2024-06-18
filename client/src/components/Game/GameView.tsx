import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { useEffect, useState } from "react";
import EmptyCollection from "./EmptyCollection";

const GameView = () => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    async function getGameBody() {
      const response = await fetch("/games/1");
      const body = await response.json();
      setGame(body);
      console.log(body);
    }
    getGameBody();
  }, []);

  if (game === undefined) {
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <EmptyCollection></EmptyCollection>
      </div>
    );
  } else {
    return (
        <div className="flex flex-col justify-center items-center w-full">
          Yippeee
        </div>
    );
  }
}

export default GameView;
