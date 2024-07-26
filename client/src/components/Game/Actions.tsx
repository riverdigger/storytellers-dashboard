import { faGear, faMultiply, faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface ActionProps {
    owner: boolean,
}

const Actions: React.FC<ActionProps> = ({
    owner,
}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);

    if (owner) {
        return (
            <div className="w-full flex justify-between items-center mt-4">
                <div className="flex justify-start items-center cursor-pointer text-red-500" onClick={async e => {
                    setShowModal(true);
                }
                }>
                    <FontAwesomeIcon icon={faTrash} className="pr-2" />
                    <p className="text-md">Delete</p>
                </div>
                { showModal &&
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-theme-purple-800 flex justify-center items-center" style={{
                        backgroundColor: 'rgba(17,24,39,0.7)'
                    }}>
                        <div className="flex flex-col justify-between rounded-xl bg-theme-purple-500 min-w-96 min-h-64 max-w-md p-4 text-light">
                            <div className="flex justify-between items-center w-full text-right p-0">
                                <div className="text-xl text-left">Delete Game</div>
                                <FontAwesomeIcon icon={faMultiply} className="text-light cursor-pointer" onClick={async e => {setShowModal(false);}}></FontAwesomeIcon>
                            </div>
                            <div className="text-lg text-left">Are you sure you want to delete this game? This action is permanent and cannot be undone.</div>
                            <div className="w-full flex justify-between items-center">
                                <div onClick={async e => {setShowModal(false);}} className="shadow-md border-1 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-900 cursor-pointer text-lg p-1 px-2 mt-8">Cancel</div>
                                <div className="shadow-md border-1 rounded-full bg-red-500 hover:bg-red-600 disabled:bg-red-800 text-red-100 cursor-pointer text-lg p-1 px-2 mt-8" onClick={async e => {
                                    const response = await fetch(`/games/${id}`, {
                                        method: "DELETE",
                                    });
                                    navigate("/home");
                                }}><FontAwesomeIcon icon={faTrash} className="mr-1"></FontAwesomeIcon>Delete</div>
                            </div>
                        </div>
                    </div>
                }
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