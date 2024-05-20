import React from "react";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterBar = ({}) => {
  return (
    <div className="w-full flex flex-row justify-center items-center my-4">
      <div className="w-1/2 bg-purple-1100 h-8 rounded-full flex flex-row justify-start items-center py-4 px-2">
        <FontAwesomeIcon icon={faSearch} className="text-xl text-white" />
      </div>
      <div className="flex flex-row justify-end items-center ml-4">
        <div className="rounded bg-purple-1100 flex flex-row justify-center items-center px-2">
          <h1 className="text-white font-bold text-lg">Game</h1>
          <FontAwesomeIcon icon={faChevronDown} className="text-white ml-2" />
        </div>
        <div className="rounded bg-purple-1100 flex flex-row justify-center items-center px-2 ml-2">
          <h1 className="text-white font-bold text-lg">Frequency</h1>
          <FontAwesomeIcon icon={faChevronDown} className="text-white ml-2" />
        </div>
        <div className="rounded bg-purple-1100 flex flex-row justify-center items-center px-2 ml-2">
          <h1 className="text-white font-bold text-lg">Location</h1>
          <FontAwesomeIcon icon={faChevronDown} className="text-white ml-2" />
        </div>
      </div>
    </div>
  );
};

export { FilterBar };
