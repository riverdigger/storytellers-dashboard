import Card from "../../components/Card";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/games");
  const games = await res.json();
  return {
    props: { games },
  };
};

export default function Game({ games }) {
  return (
    <div>
      {games.map((game) => (
        <Card
          title={game.title}
          gameMaster={game.leader}
          maxPlayerCount={game.maxPlayerCount}
          schedule={game.schedule}
          gameSystem={game.system}
          imageUrl={game.imageUrl}
        ></Card>
      ))}
    </div>
  );
}
