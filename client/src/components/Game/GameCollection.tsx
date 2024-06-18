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
import EmptyCollection from "./EmptyCollection";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameCollection = () => {
  const [games, setGames] = useState([]);

  function FilterBar() {
    const [search, setSearch] = useState("");
  
    const submitForm = async () => {
      const response = await fetch("/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: search }),
      });
        const body = await response.json();
        if (body.length > 0) {
          setGames(body);
        } else {
          setGames([]);
        }
        console.log(body);
    }
  
    return (
      <form onSubmit={e => e.preventDefault()} className="w-full flex flex-row justify-center items-center my-4">
        <div className="w-1/2 bg-purple-1100 h-8 rounded-full flex flex-row justify-start items-center py-4 px-2">
          <FontAwesomeIcon icon={faSearch} className="text-xl text-white" />
          <input
            name="search"
            type="text"
            placeholder="Search for a game"
            className="bg-transparent text-white ml-2 w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-end items-center ml-4">
          <button onClick={submitForm} type="submit" className="bg-purple-1100 rounded-full h-8 w-8 flex justify-center items-center ml-2">
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </button>
        </div>
      </form>
    );
  }

  useEffect(() => {
    async function getGamesBody() {
      const response = await fetch("/games");
      const body = await response.json();
      if (body.length > 0) {
        setGames(body);
      } else {
        setGames([]);
      }
      console.log(body);
    }
    getGamesBody();
  }, []);

  if (games.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <FilterBar></FilterBar>
        <EmptyCollection></EmptyCollection>
      </div>
    );
  } else {
    return (
        <div className="flex flex-col justify-center items-center w-full">
          <FilterBar></FilterBar>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={games.length < 5 ? false : true}
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
            className="bg-transparent w-full"
          >
            {games && games.map(game => (
                <SwiperSlide>
                    <Card
                    id={game["id"]}
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
        </div>
    );
  }
}

export default GameCollection;
