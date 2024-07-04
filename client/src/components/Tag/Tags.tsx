import React from "react";

interface TagProps {
    playerCount?: number,
    maxPlayers?: number,
    isNew?: boolean,
    gameMaster?: string,
}

const AvailabilityTag: React.FC<TagProps> =  ({ playerCount, maxPlayers }) => {
  if (playerCount! < maxPlayers!) {
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

const GMNeededTag: React.FC<TagProps> = ({ gameMaster }) => {
    if (!gameMaster || gameMaster.length === 0) {
      return (
        <span className="absolute top-0 shadow-xl rounded-b-lg border-t-0 border-2 font-bold bg-red-900 text-red-300 border-red-300 p-1 px-2 mr-4">
          GM NEEDED
        </span>
      );
    }
    return null;
};

const NewTag: React.FC<TagProps> = ({ isNew }) => {
    if (isNew) {
      return (
        <span className="absolute top-0 shadow-xl rounded-b-lg border-t-0 border-2 font-bold bg-purple-900 text-purple-300 border-purple-300 p-1 px-2 mr-4">
          NEW
        </span>
      );
    }
    return null;
};

const GMTag: React.FC<TagProps> = () => {
  return (
    <span className="shadow-xl rounded-full border-2 font-bold bg-yellow-900 text-yellow-300 border-yellow-300 px-2">
      GM
    </span>
  );
};

const PlayerTag: React.FC<TagProps> = () => {
  return (
    <span className="shadow-xl rounded-full border-2 font-bold bg-green-900 text-green-300 border-green-300 px-2">
      Player
    </span>
  );
};

export { AvailabilityTag, GMNeededTag, NewTag, GMTag, PlayerTag};
