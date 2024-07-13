import { faGear, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";

interface ActionProps {
    owner: boolean,
}

const Actions: React.FC<ActionProps> = ({
    owner,
}) => {
    const navigate = useNavigate();
    const { id } = useParams();

    if (owner) {
        return (
            <div className="w-full flex justify-between items-center mt-48">
                <div className="flex justify-start items-center cursor-pointer text-red-500" onClick={async e => {
                    const response = await fetch(`/games/${id}`, {
                        method: "DELETE",
                    });
                    navigate("/home");
                }
                }>
                    <FontAwesomeIcon icon={faTrash} className="pr-2" />
                    <p className="text-md">Delete</p>
                </div>
                <div className="flex justify-end items-center cursor-pointer" onClick={e => navigate(`/edit/${id}`)}>
                    <FontAwesomeIcon icon={faGear} className="pr-2" />
                    <p className="text-md">Edit</p>
                </div>
            </div>
        );
    }

    return null;
}

export { Actions };