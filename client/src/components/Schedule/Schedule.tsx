import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ScheduleProps {
    schedule: string,
    startDate?: string,
    nextDate?: string,
}

const Schedule: React.FC<ScheduleProps> = ({
    schedule,
    startDate,
    nextDate,
  }) => {
    let dateTime = new Date().toDateString(); // TODO: Update to use game.startDate and such
    
    return (
        <div className="flex justify-center items-center bg-theme-purple-500 rounded-xl shadow-md px-4 pb-4 pt-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-6xl text-light mr-4" />
            <div className="text-gray-300">
                <h1 className="text-lg font-bold text-left">{schedule}</h1>
                <div className="flex justify-between items-center text-md w-full whitespace-nowrap">
                    <b className="mr-1">First:</b> { startDate ? startDate : dateTime}
                </div>
                <div className="flex justify-between items-center text-md w-full whitespace-nowrap">
                    <b className="mr-1">Next:</b> { nextDate ? nextDate : dateTime}
                </div>
            </div>
        </div>
    );
}

export { Schedule };