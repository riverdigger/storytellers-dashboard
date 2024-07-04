// import required modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Error500 } from "../../components/Error/500";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { PlayerList } from "../../components/Player/PlayerList";
import { Schedule } from "../../components/Schedule/Schedule";
import { Actions } from "../../components/Game/Actions";

const Game = () => {
  const { id } = useParams();
  const [game, setGame] = useState();
  let dateTime = new Date().toLocaleString(); // TODO: Update to use game.createdAt
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    async function getGameBody() {
      const response = await fetch(`/games/${id}`);
      const body = await response.json();
      setGame(body);
      setOwner(false);
      if (body["gameMaster"] === undefined || body["creator"] === "VeryLongFirstName EvenLongerLastName") {
        setOwner(true)  // TODO: Update to use signed in user
      }
      console.log(body);
    }
    getGameBody();
  }, []);

  return (
    <div className="flex justify-between items-start w-full h-full text-light py-8 px-72">
      {/* Left Column */}
      <div className="flex flex-col justify-start items-center">
        <div
          className="rounded-xl flex flex-col justify-between text-light"
          style={{
            backgroundImage: `url(${(game && !game["error"]) ? game["imageUrl"] : "https://via.placeholder.com/400x600"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "400px",
            height: "600px",
            boxShadow: "inset 0 0 80px rgba(0, 0, 0, 0.5)", // Add vignette effect
          }}
        >
        </div>
        <div className="flex flex-col justify-start items-start w-full mt-4 bg-theme-purple-500 rounded-xl p-2 shadow-md">
          <div className="flex justify-between items-center text-md text-gray-300 w-full">
            <b>Created At:</b> {(game && !game["error"]) ? new Date(game["createdAt"]).toLocaleString() : dateTime}
          </div>
          <div className="flex justify-between items-center text-md text-gray-300 w-full">
            <b>Updated At:</b> {(game && !game["error"]) ? new Date(game["updatedAt"]).toLocaleString() : dateTime}
          </div>
        </div>
      </div>
      {/* Right Column */}
      <div className="flex flex-col justify-between items-start w-full h-full grow ml-8">
        <div className="flex justify-between items-start w-full h-full grow mb-4">
          <div className="flex flex-col justify-start items-start grow">
            <h1 className="text-4xl font-bold text-left">
              {(game && !game["error"]) ? game["title"] : "The Long Game Title That Never Ends"}
            </h1>
            <h2 className="text-2xl text-left flex items-center">
              <FontAwesomeIcon icon={faUser} className="pr-1 text-lg" />{(game && !game["error"]) ? game["gameMaster"] : "VeryLongFirstName EvenLongerLastName"}
            </h2>
          </div>
          <Schedule schedule={(game && !game["error"]) ? game["schedule"] : "WEEKLY"} startDate={(game && !game["error"]) ? game["startDate"] : undefined} nextDate={(game && !game["error"]) ? game["nextDate"] : undefined}></Schedule>
        </div>
        <div className="flex flex-col justify-start items-start w-full h-full grow">
          <h2 className="text-xl font-bold text-left">
            Details
          </h2>
          <p className="text-xl text-left">
            {(game && !game["error"]) ? game["description"] : "No description found."}
          </p>
        </div>
        <PlayerList maxPlayers={(game && !game["error"]) ? game["maxPlayers"] : 5}></PlayerList>
        <Actions owner={owner}></Actions>
      </div>
    </div>
  );
}

export default Game;
