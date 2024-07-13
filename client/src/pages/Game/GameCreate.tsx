// import required modules
import GameForm from "../../components/Game/GameForm";
const initialValues = {
  title: "",
  description: "",
  schedule: "WEEKLY",
  system: "D&D 5e",
  gameMaster: "",
  imageUrl: "",
  startDate: "",
  timezone: "-8",
  maxPlayers: 0,
  hidden: true,
  active: false,
};

const GameCreate = () => {
  return (
    <div>
        <div className="flex justify-center items-center w-full">
          <h1 className="text-4xl font-bold text-center text-light pt-4">
              Create Game
          </h1>
        </div>
        <div className="w-full flex justify-center items-start mb-24">
          <GameForm></GameForm>
        </div>
    </div>
  );
}

export default GameCreate;
