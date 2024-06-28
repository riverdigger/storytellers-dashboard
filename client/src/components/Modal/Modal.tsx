import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { AvailabilityTag, GMNeededTag, NewTag } from "../Tag/Tags";
import { useId, useBoolean } from '@fluentui/react-hooks';
import hideModal from "../../App";
import { CardProps } from "../Game/Card";

interface ModalProps {
    title: string,
    gameData: CardProps,
    isOpen: boolean,
}

const Modal: React.FC<ModalProps> = ({
  title,
  gameData,
  isOpen,
}) => {

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="rounded-xl flex flex-col justify-center items-center text-light absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
      onClick={hideModal}
    >
      <div className="flex flex-row w-full justify-start p-4 bg-black">
        {title}
      </div>
      <div
        className="bg-theme-purple-500 w-fll"
      >
        Test body
      </div>
    </div>
  );
};

export { Modal };
