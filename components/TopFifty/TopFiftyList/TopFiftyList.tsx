import * as React from 'react';
import TopFiftyPlayer from './TopFiftyPlayer/TopFiftyPlayer';
import './TopFiftyList.css';

interface Player {
    rank: number;
    name: string;
    height: string;
    weight: string;
    position: string;
    team: string;
    description: string;
    stats: string;
    percentages: string;
    advanced: string;
    imageUrl: string | null;
}

export default function TopFiftyList({ players }: { players: Player[] }) {

    if (!players || players.length === 0) {
        return <div className='top-fifty-outer-container'>No players available.</div>;
    }

    // Sort by rank
    const sortedPlayers = players.sort((a, b) => a.rank - b.rank);

    return (
        <div className='top-fifty-outer-container'>
            <div className='top-fifty-players'>
                {sortedPlayers.map(player => (
                    <TopFiftyPlayer key={player.rank} player={player} />
                ))}
            </div>
        </div>
    );
}
