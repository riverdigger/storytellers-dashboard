import React from "react";

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

export { NewTag };
