// import required modules
import React, { useEffect, useState } from "react";
import { useFetcher, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faPenFancy,
} from "@fortawesome/free-solid-svg-icons";
import { systems } from "../../common/systems";
import { schedules } from "../../common/schedules";
import { timezones } from "../../common/timezones";
import { FieldValues, useForm } from "react-hook-form";

interface GameFormProps {
  id?: string,
}

const GameForm: React.FC<GameFormProps> = ({id}) => {
  const navigate = useNavigate();
  const [game, setGame] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm();

  useEffect(() => {
    async function getGameBody() {
      if (id) {
        const response = await fetch(`/games/${id}`);
        const body = await response.json();
        setGame(body);
      }
    }
    getGameBody();
  }, []);

  useEffect(() => {
    if (game) {
      reset({
        title: game["title"],
        description: game["description"],
        active: game["active"],
        hidden: game["hidden"],
        system: game["system"],
        imageUrl: game["imageUrl"],
        maxPlayers: game["maxPlayers"],
        schedule: game["schedule"],
        startDate: game["startDate"],
      });
    }
}, [game]);

  const submitForm = async (data: FieldValues) => {
    let response: Response;
    console.log(data);
    if (game) {
      response = await fetch(`/games/${game["id"]}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      response = await fetch("/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
    const body = await response.json();
    if (body["rowsAffected"] == 0) {
      console.log("Error");
    } else {
      navigate('/home');
    }
  };

  return (
    <form onSubmit={handleSubmit((data) => {submitForm(data);})} className="w-2/5">
        <div className="flex flex-col justify-start items-start w-full mb-4">
          <label htmlFor="title" className="text-light text-lg">Title</label>
          <input
            {...register("title", {required: "This field is required"})}
            placeholder="Ex: The Lost Mines of Phandelver"
            className="w-full rounded-lg p-2 bg-theme-purple-500 text-light"
          />
        </div>

        <div className="flex flex-col justify-start items-start w-full mb-4">
          <label htmlFor="description" className="text-light text-lg">Description</label>
          <textarea
            {...register("description", { required: "This field is required"})}
            placeholder="Tell us all about your game!"
            className="w-full rounded-lg p-2 bg-theme-purple-500 text-light"
            rows={8}
          />
        </div>

        <div className="flex justify-between items-center w-full mb-4">
          <div className="flex flex-col justify-start items-start w-1/2 mr-4">
            <label htmlFor="system" className="text-light text-lg">System</label>
            <select 
              {...register("system", { required: "This field is required"})}
              className="w-full rounded-lg p-2 bg-theme-purple-500 text-light cursor-pointer"
            >
              {Object.keys(systems).map((system) => (
                <option value={system} className="">{systems[system]}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col justify-start items-start w-1/2">
            <label htmlFor="maxPlayers" className="text-light text-lg">Max # of Players</label>
            <input
              {...register("maxPlayers", { required: "This field is required"})}
              className="w-full rounded-lg p-2 bg-theme-purple-500 text-light"
              type="number"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-full mb-4">
          <label htmlFor="imageUrl" className="text-light text-lg">Background Image URL</label>
          <input
            {...register("imageUrl", { required: "This field is required"})}
            placeholder="Ex: https://cdn.media.amplience.net/i/wizardsprod/players-handbook-2024-cover-digital?w=1240&fmt=auto"
            className="w-full rounded-lg p-2 bg-theme-purple-500 text-light"
          />
        </div>

        <div className="w-full rounded-lg bg-theme-purple-700 p-4 mb-4">
          <h2 className=" text-left font-bold text-light text-xl"><FontAwesomeIcon icon={faCalendarAlt} className="mr-1"></FontAwesomeIcon>Schedule</h2>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col justify-start items-start w-3/5 mr-2">
              <label htmlFor="startDate" className="text-light text-lg">Start Date</label>
              <input
                {...register("startDate", { required: "This field is required"})}
                className="w-full rounded-lg p-2 bg-theme-purple-500 text-light"
                type="datetime-local"
              />
            </div>

            <div className="flex flex-col justify-start items-start w-2/5">
              <label htmlFor="schedule" className="text-light text-lg">Frequency</label>
              <select
              {...register("schedule")}
              className="w-full rounded-lg p-2 bg-theme-purple-500 text-light cursor-pointer"
              >
                {Object.keys(schedules).map((schedule) => (
                  <option value={schedule} className="">{schedules[schedule]}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-full mb-4">
            <div className="flex flex-col justify-start items-start w-full pr-6">
              <label htmlFor="hidden" className="text-light text-lg">Hidden</label>
              <div>
                <p className="text-light text-md text-left">Is this game only visible to you? Useful for creating a game before you want others to see it.</p>
              </div>
            </div>
            <input
              {...register("hidden")}
              className="mt-1 mb-0 w-8 h-8"
              type="checkbox"
            />
          </div>

          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex flex-col justify-start items-start w-full pr-6">
              <label htmlFor="active" className="text-light text-lg">Active</label>
              <div>
                <p className="text-light text-md text-left">Can players join this game? Useful for creating a game before you want others to join or when a game has completed.</p>
              </div>
            </div>
            <input
              {...register("active")}
              className="mt-1 mb-0 w-8 h-8"
              type="checkbox"
            />
          </div>

        <button type="submit" className="shadow-md border-1 rounded bg-green-500 hover:bg-green-600 text-green-100 cursor-pointer text-lg font-bold p-1 px-2 mt-8"><FontAwesomeIcon icon={faPenFancy} className="text-lg mr-2"></FontAwesomeIcon>Submit</button>
    </form>
  );
}

export default GameForm;
