import React from "react";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({}) => {
  return (
    <div className="flex flex-row justify-between items-center w-full bg-purple-1100 p-2">
      <div className="flex flex-row justify-start items-center">
        <FontAwesomeIcon
          icon={faDiceD20}
          className="text-2xl text-white mr-2"
        />
        <h1 className="text-2xl font-bold text-center text-white">
          The Storyteller's Guild
        </h1>
      </div>
      <div className="flex flex-row justify-end items-center">
        <h1 className="text-xl font-bold text-center text-white">Games</h1>
        <h1 className="text-xl font-bold text-center text-white ml-8">About</h1>
        <h1 className="text-xl font-bold text-center text-white ml-8">
          Profile
        </h1>
      </div>
    </div>
  );
};

export { Navbar };
