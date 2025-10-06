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

    // Group players by tiers
    const topTenPlayers = sortedPlayers.filter(player => player.rank >= 1 && player.rank <= 10);
    const elevenToTwentyFive = sortedPlayers.filter(player => player.rank >= 11 && player.rank <= 25);
    const twentySixToFifty = sortedPlayers.filter(player => player.rank >= 26 && player.rank <= 50);

    return (
        <div className='top-fifty-outer-container'>
            <div className='top-ten-players'>
                <div className='main-padding'>
                    <h3 className="text-2xl md:text-3xl font-bold text-white px-2 md:px-6 py-2
                        [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]"
                    >Top 10</h3>
                </div>
                <div className='top-fifty-players'>
                    {topTenPlayers.map(player => (
                        <TopFiftyPlayer key={player.rank} player={player} />
                    ))}
                </div>
            </div>
            <div className='eleven-to-twenty-five-players'>
                <div className='main-padding'>
                    <h3 className="text-2xl md:text-3xl font-bold text-white px-2 md:px-6 py-2
                        [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]"
                    >11-25</h3>
                </div>
                <div className='top-fifty-players'>
                    {elevenToTwentyFive.map(player => (
                        <TopFiftyPlayer key={player.rank} player={player} />
                    ))}
                </div>
            </div>
            <div className='twenty-six-to-fifty-players'>
                <div className='main-padding'>
                    <h3 className="text-2xl md:text-3xl font-bold text-white px-2 md:px-6 py-2
                        [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]"
                    >26-50</h3>
                </div>
                <div className='top-fifty-players'>
                    {twentySixToFifty.map(player => (
                        <TopFiftyPlayer key={player.rank} player={player} />
                    ))}
                </div>
            </div>
        </div>
    );
}
