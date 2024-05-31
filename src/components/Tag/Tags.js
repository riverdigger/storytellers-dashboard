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

const GMNeededTag = ({ gameMaster }) => {
    if (!gameMaster || gameMaster.length === 0) {
      return (
        <span className="absolute top-0 shadow-xl rounded-b-lg border-t-0 border-2 font-bold bg-red-900 text-red-300 border-red-300 p-1 px-2 mr-4">
          GM NEEDED
        </span>
      );
    }
    return;
};

const NewTag = ({ isNew }) => {
    if (isNew) {
      return (
        <span className="absolute top-0 shadow-xl rounded-b-lg border-t-0 border-2 font-bold bg-purple-900 text-purple-300 border-purple-300 p-1 px-2 mr-4">
          NEW
        </span>
      );
    }
    return;
};

export { AvailabilityTag, GMNeededTag, NewTag };
