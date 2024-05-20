import React from "react";

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

export { GMNeededTag };
