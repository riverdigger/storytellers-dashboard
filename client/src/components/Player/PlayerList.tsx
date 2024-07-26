import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlayerCard } from "./PlayerCard";
import { EmptyPlayerCard } from "./EmptyPlayerCard";

interface PlayerListProps {
    maxPlayers: number,
}

const PlayerList: React.FC<PlayerListProps> = ({
    maxPlayers,
}) => {
  const { id } = useParams();
  const [players, setPlayers] = useState([]);
  let emptyPlayers: any[] = [];

  useEffect(() => {
    async function getPlayersBody() {
        const response = await fetch(`/requests/${id}`); // TODO: Add route to fetch requests based on game
        const body = await response.json();
        emptyPlayers = Array(maxPlayers).fill(0);
        if (body.length > 0) {
            setPlayers(body);
            emptyPlayers = Array(maxPlayers - body.length).fill(0);
        } else {
            setPlayers([]);
        }
        console.log(`--------- Empty Players: ${emptyPlayers}`);
    }
    getPlayersBody();
  }, []);
    return (
        <div className="w-full flex flex-col justify-start items-start mt-16">
            <h2 className="text-xl text-light font-bold mb-2">Participants</h2>
            <div className="flex justify-start items-center w-full rounded-xl bg-theme-purple-500 p-4 shadow-md">
                {/* TODO: Fix to show proper empty list */}
                {players && players.map(player => (
                    <PlayerCard></PlayerCard>
                ))}
                {emptyPlayers.map(emptyPlayer => (
                    <EmptyPlayerCard></EmptyPlayerCard>
                ))}
                    <PlayerCard></PlayerCard>
                    <PlayerCard></PlayerCard>
                    <PlayerCard></PlayerCard>
                    <EmptyPlayerCard></EmptyPlayerCard>
                    <EmptyPlayerCard></EmptyPlayerCard>

            </div>
        </div>
    );
}

const PlayerListLoading: React.FC = () => {
    return (
        <div className="w-full flex flex-col justify-start items-start mt-16">
            <h2 className="rounded-md bg-theme-purple-500 animate-pulse h-8 w-36 mb-1"></h2>
            <div className="rounded-md bg-theme-purple-500 animate-pulse h-36 w-full">
            </div>
        </div>
    );
}

export { PlayerList, PlayerListLoading };