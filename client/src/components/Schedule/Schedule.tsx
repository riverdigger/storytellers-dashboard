import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ScheduleProps {
    schedule: string,
    startDate?: Date,
    nextDate?: Date,
}

const Schedule: React.FC<ScheduleProps> = ({
    schedule,
    startDate,
    nextDate,
  }) => {
    let dateTime = new Date().toDateString(); // TODO: Update to use game.startDate and such
    const upperSchedule = schedule.toUpperCase();
    
    return (
        <div className="flex justify-center items-center bg-theme-purple-500 rounded-xl shadow-md px-4 pb-4 pt-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-6xl text-light mr-4" />
            <div className="text-gray-300">
                <h1 className="text-lg font-bold text-left">{upperSchedule}</h1>
                <div className="flex justify-between items-center text-md w-full whitespace-nowrap">
                    <b className="mr-1">First:</b> { startDate ? new Date(startDate).toLocaleString() : dateTime}
                </div>
                <div className="flex justify-between items-center text-md w-full whitespace-nowrap">
                    <b className="mr-1">Next:</b> { nextDate ? new Date(nextDate).toLocaleString() : dateTime}
                </div>
            </div>
        </div>
    );
}

const ScheduleLoading: React.FC = () => {

    return (
        <div className="bg-theme-purple-500 rounded-xl animate-pulse h-32 w-56 shadow-md ml-4"></div>
    );
}

export { Schedule, ScheduleLoading };