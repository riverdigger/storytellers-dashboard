import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

interface ActionProps {
    owner: boolean,
}

const Actions: React.FC<ActionProps> = ({
    owner,
}) => {
    const navigate = useNavigate();

    if (owner) {
        return (
            <div
                className="w-full flex justify-end items-center mt-48 flex-end cursor-pointer"
                onClick={e => navigate(`/edit`)}
            >
                <FontAwesomeIcon icon={faGear} className="pr-2" />
                <p className="text-md">Edit</p>
            </div>
        );
    }

    return null;
}

export { Actions };