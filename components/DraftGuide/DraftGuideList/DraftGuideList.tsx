import * as React from 'react';
import DraftGuidePlayer from './DraftGuidePlayer/DraftGuidePlayer';
import './DraftGuideList.css';

interface Player {
  rank: number;
  name: string;
  height: string;
  weight: string;
  position: string;
  team: string;
  description: string;
  stats: string;
  percentages: string
  advanced: string;
}

export default function DraftGuideList({ players }: { players: Player[] }) {

  if (!players || players.length === 0) {
    return <div className='draft-guide-outer-container'>No players available.{JSON.stringify(players)}</div>;
  }

  // Filter and sort logic
  const filteredPlayers = players
    .sort((a, b) => a.rank - b.rank)
    .filter((obj, index, arr) => 
      arr.findIndex((o) => o.rank === obj.rank) === index
    );

  const firstRoundPlayers = filteredPlayers.filter(
    player => player.rank >= 1 && player.rank <= 30
  );
  
  const notableSecondRounders = filteredPlayers.filter(
    player => player.rank > 30
  );

  return (
    <div className='draft-guide-outer-container'>
      <div className='first-round-players'>
        <div className='main-padding'>
          <h3>First Round</h3>
        </div> 
        {firstRoundPlayers.map(player => (
          <DraftGuidePlayer key={player.rank} player={player} />
        ))}
      </div>
      <div className='notable-second-rounders'>
        <div className='main-padding'>
          <h3>Notable Second Rounders</h3>
        </div>
        {notableSecondRounders.map(player => (
          <DraftGuidePlayer key={player.rank} player={player} />
        ))}
      </div>
    </div>
  );
}