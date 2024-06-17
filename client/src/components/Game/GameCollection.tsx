import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const GameCollection = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function getGamesBody() {
      const response = await fetch("/games");
      const body = await response.json();
      setGames(body);
      console.log(body);
    }
    getGamesBody();
  }, []);

  return (
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={5}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="bg-transparent"
      >
        {games.map(game => (
            <SwiperSlide>
                <Card
                title={game["title"]}
                gameMaster={game["gm_id"]}
                playerCount={0}
                maxPlayerCount={game["max_players"]}
                isNew={(new Date().getTime() - new Date(game["createdAt"]).getTime()) <= (3 * 1000 * 86400) ? true : false}
                schedule={game["schedule"]}
                gameSystem={game["system"]}
                imageUrl={game["image_url"]}
                ></Card>
            </SwiperSlide>
      ))}
      </Swiper>
  );
}

export default GameCollection;
