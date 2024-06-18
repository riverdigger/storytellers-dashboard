import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { AvailabilityTag, GMNeededTag, NewTag } from "../Tag/Tags";


interface CardProps {
    id: number,
    title: string,
    isNew: boolean,
    playerCount: number,
    maxPlayerCount: number,
    schedule: string,
    gameMaster: string,
    gameSystem: string,
    imageUrl: string
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  isNew,
  playerCount,
  maxPlayerCount,
  schedule,
  gameMaster,
  gameSystem,
  imageUrl,
}) => {
  async function getGameBody() {
    const response = await fetch(`/games/${id}`);
    const body = await response.json();
    console.log(body);
  }

  return (
    <div
      className="rounded-xl flex flex-col justify-between text-white"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "400px",
        height: "600px",
        boxShadow: "inset 0 0 80px rgba(0, 0, 0, 0.5)", // Add vignette effect
        // WebkitBoxReflect:
        // "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.1))",
      }}
      onClick={getGameBody}
    >
      <div className="flex flex-row w-full justify-center p-4">
        <div className="flex flex-row justify-center">
          <NewTag isNew={isNew}></NewTag>
          <GMNeededTag gameMaster={gameMaster}></GMNeededTag>
        </div>
      </div>
      <div
        className="bg-gray-900 bg-opacity-60 p-4 pt-8 overflow-hidden rounded-b-xl flex flex-col backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(0deg, rgba(17,24,39,0.7) 70%, rgba(0,0,0,0) 100%)",
        }}
      >
        <h2 className="text-3xl text-left drop-shadow-lg">{title}</h2>
        <div className="flex flex-row justify-start items-center mb-4">
          <span className="text-lg text-left font-bold">{gameMaster}</span>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row justify-start">
            <AvailabilityTag playerCount={playerCount} maxPlayerCount={maxPlayerCount}></AvailabilityTag>
          </div>
          <div className="flex flex-row justify-end">
            <div className="flex flex-row justify-center items-center whitespace-nowrap shadow-xl rounded-full border-2 font-bold bg-gray-900 text-white border-white p-1 px-2 text-sm">
              <FontAwesomeIcon icon={faUser} className="pr-2 pl-1" />
              {playerCount}
            </div>
            <div className="flex flex-row justify-center items-center whitespace-nowrap shadow-xl rounded-full border-2 font-bold bg-gray-900 text-white border-white p-1 px-2 ml-1 text-sm">
              <FontAwesomeIcon icon={faCalendar} className="pr-2 pl-1" />
              {schedule}
            </div>
            <div className="flex flex-row justify-center items-center whitespace-nowrap shadow-xl rounded-full border-2 font-bold bg-gray-900 text-white border-white p-1 px-2 ml-1 text-sm">
              {gameSystem}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };

