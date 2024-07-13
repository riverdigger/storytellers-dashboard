// import required modules
import { useEffect, useState } from "react";
import GameForm from "../../components/Game/GameForm";
import { useParams } from "react-router-dom";

const GameEdit = () => {
  const { id } = useParams();

  return (
    <div>
        <div className="flex justify-center items-center w-full">
          <h1 className="text-4xl font-bold text-center text-light pt-4">
              Edit Game
          </h1>
        </div>
        <div className="w-full flex justify-center items-start mb-24">
          <GameForm id={id}></GameForm>
        </div>
    </div>
  );
}

export default GameEdit;
