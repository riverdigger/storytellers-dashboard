import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const EmptyPlayerCard = () => {

    return (
        <div className="flex flex-col justify-center items-center rounded-xl bg-gray-800 p-2 mr-4 h-max">
            <div
                className="rounded-full shadow-lg bg-gray-700 flex justify-center items-center"
                style={{
                    width: "64px",
                    height: "64px",
                  }}
            >
              <FontAwesomeIcon icon={faUser} className="text-2xl text-gray-500" />
            </div>
            <h1 className="text-lg text-gray-500">Open Spot</h1>
        </div>
    );
}

export { EmptyPlayerCard };