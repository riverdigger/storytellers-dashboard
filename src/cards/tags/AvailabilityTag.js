import React from "react";

const AvailabilityTag = ({ playerCount, maxPlayerCount }) => {
  if (playerCount < maxPlayerCount) {
    return (
      <span className="shadow-xl rounded-full border-2 font-bold bg-green-900 text-green-300 border-green-300 p-1 px-2 mr-1">
        OPEN
      </span>
    );
  } else {
    return (
      <span className="shadow-xl rounded-full border-2 font-bold bg-red-900 text-red-300 border-red-300 p-1 px-2 mr-1">
        FULL
      </span>
    );
  }
};

export { AvailabilityTag };
