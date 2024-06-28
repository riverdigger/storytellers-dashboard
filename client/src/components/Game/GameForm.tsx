// import required modules
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faPenFancy,
} from "@fortawesome/free-solid-svg-icons";
import { systems } from "../../common/systems";
import { schedules } from "../../common/schedules";
import { timezones } from "../../common/timezones";

const initialValues = {
  title: "",
  description: "",
  schedule: "",
  system: "",
  gameMaster: "",
  imageUrl: "",
  startDate: new Date(),
  maxPlayers: 0,
};

const GameForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [game, setGame] = useState();
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  const submitForm = async () => {
    const response = await fetch("/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const body = await response.json();
    console.log(body);
    navigate('/');
  };

  return (
    <form className="w-2/5">
        <div className="flex flex-col justify-start items-start w-full mb-4">
          <label htmlFor="title" className="text-light text-lg">Title</label>
          <input
            value={values.title}
            onChange={handleInputChange}
            placeholder="Ex: The Lost Mines of Phandelver"
            name="title"
            className="w-full rounded-lg p-2 bg-theme-purple-500 text-light"
            required
          />
        </div>

        <div className="flex flex-col justify-start items-start w-full mb-4">
          <label htmlFor="description" className="text-light text-lg">Description</label>
          <textarea
            value={values.description}
            onChange={handleTextAreaChange}
            placeholder="Tell us all about your game!"
            name="description"
            className="w-full rounded-lg p-2 bg-theme-purple-500 text-light"
            required
            rows={8}
          />
        </div>

        <div className="flex justify-between items-center w-full mb-4">
          <div className="flex flex-col justify-start items-start w-1/2 mr-4">
            <label htmlFor="system" className="text-light text-lg">System</label>
            <select name="system" className="w-full rounded-lg p-2 bg-theme-purple-500 text-light cursor-pointer">
              {Object.keys(systems).map((system) => (
                <option value={system} className="">{systems[system]}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col justify-start items-start w-1/2">
            <label htmlFor="maxPlayers" className="text-light text-lg">Max # of Players</label>
            <input
              value={values.maxPlayers}
              onChange={handleInputChange}
              name="maxPlayers"
              className="w-full rounded-lg p-2 bg-theme-purple-500 text-light"
              required
              type="number"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-full mb-4">
          <label htmlFor="imageUrl" className="text-light text-lg">Background Image URL</label>
          <input
            value={values.imageUrl}
            onChange={handleInputChange}
            placeholder="Ex: https://cdn.media.amplience.net/i/wizardsprod/players-handbook-2024-cover-digital?w=1240&fmt=auto"
            name="imageUrl"
            className="w-full rounded-lg p-2 bg-theme-purple-500 text-light"
            required
          />
        </div>

        <div className="w-full rounded-lg bg-theme-purple-700 p-4 mb-4">
          <h2 className=" text-left font-bold text-light text-xl"><FontAwesomeIcon icon={faCalendarAlt} className="mr-1"></FontAwesomeIcon>Schedule</h2>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col justify-start items-start w-1/4 mr-2">
              <label htmlFor="startDate" className="text-light text-lg">Start Date</label>
              <input
                onChange={handleInputChange}
                name="startDate"
                className="w-full rounded-lg p-2 bg-theme-purple-500 text-light"
                required
                type="datetime-local"
              />
            </div>

            <div className="flex flex-col justify-start items-start w-1/2 mr-2">
              <label htmlFor="timezone" className="text-light text-lg">Time Zone</label>
              <select name="timezone" className="w-full rounded-lg p-2 bg-theme-purple-500 text-light cursor-pointer">
                {timezones.map((timezone) => (
                  <option value={timezone['value']} className="">{timezone['label']}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col justify-start items-start w-1/4">
              <label htmlFor="schedule" className="text-light text-lg">Frequency</label>
              <select name="schedule" className="w-full rounded-lg p-2 bg-theme-purple-500 text-light cursor-pointer">
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
              onChange={handleInputChange}
              name="hidden"
              className="mt-1 mb-0 w-8 h-8"
              type="checkbox"
              checked={true}
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
              onChange={handleInputChange}
              name="active"
              className="mt-1 mb-0 w-8 h-8"
              type="checkbox"
            />
          </div>

        <button type="submit" onClick={submitForm} className="shadow-md border-1 rounded bg-green-500 hover:bg-green-600 text-green-100 cursor-pointer text-lg font-bold p-1 px-2 mt-8"><FontAwesomeIcon icon={faPenFancy} className="text-lg mr-2"></FontAwesomeIcon>Submit</button>
    </form>
  );
}

export default GameForm;
