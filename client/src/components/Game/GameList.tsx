import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardLoading } from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const GameList = () => {
  const [games, setGames] = useState([]);

  const navigate = useNavigate();

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
    };
  
    return (
      <div className="flex justify-center items-center my-4 w-full">
        <div 
          className="flex justify-center items-center border-1 rounded-full bg-green-500 hover:bg-green-600 font-bold text-green-900 cursor-pointer text-md p-1 px-3 mr-4"
          onClick={e => navigate(`/create`)}
        >
          <FontAwesomeIcon icon={faPlus} className="mr-1"></FontAwesomeIcon>CREATE
        </div>
        <form onSubmit={e => e.preventDefault()} className="w-96 my-4">
          <div className="bg-theme-purple-500 h-8 rounded-full flex flex-row justify-start items-center py-4 px-1">
            <button onClick={submitForm} type="submit" className="bg-theme-purple-500 rounded-full h-8 w-8 flex justify-center items-center">
              <FontAwesomeIcon icon={faSearch} className="text-light" />
            </button>
            <input
              name="search"
              type="text"
              placeholder="Search for a game"
              className="bg-transparent text-light grow"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
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
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={false}
            centeredSlides={true}
            slidesPerView={5}
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
            <SwiperSlide>
                <CardLoading></CardLoading>
            </SwiperSlide>
            <SwiperSlide>
                <CardLoading></CardLoading>
            </SwiperSlide>
            <SwiperSlide>
                <CardLoading></CardLoading>
            </SwiperSlide>
            <SwiperSlide>
                <CardLoading></CardLoading>
            </SwiperSlide>
            <SwiperSlide>
                <CardLoading></CardLoading>
            </SwiperSlide>
            <SwiperSlide>
                <CardLoading></CardLoading>
            </SwiperSlide>
          </Swiper>
        {/* <EmptyCollection></EmptyCollection> */}
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
            centeredSlides={false}
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
                    gameMaster={game["gmId"]}
                    playerCount={0}
                    maxPlayers={game["maxPlayers"]}
                    isNew={(new Date().getTime() - new Date(game["createdAt"]).getTime()) <= (3 * 1000 * 86400) ? true : false}
                    schedule={game["schedule"]}
                    gameSystem={game["system"]}
                    imageUrl={game["imageUrl"]}
                    ></Card>
                </SwiperSlide>
          ))}
          </Swiper>
        </div>
    );
  }
}

export default GameList;
