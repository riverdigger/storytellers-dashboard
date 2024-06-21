import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = ({}) => {
  return (
    <div className="flex flex-row justify-between items-center w-full bg-purple-1100 py-2 px-8">
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
        <Link to="/" className="text-xl font-bold text-center text-white mr-4">
          Games
        </Link>
        <Link to="/" className="text-xl font-bold text-center text-white mr-4"> {/* TODO: Update link */}
          About
        </Link>
        <Link to="/" className="text-xl font-bold text-center text-white"> {/* TODO: Update link */}
          Profile
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
