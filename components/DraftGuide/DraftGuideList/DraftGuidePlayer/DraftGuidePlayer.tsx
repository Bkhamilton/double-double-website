"use client";
import * as React from 'react';
import { useState } from 'react';
//import { parseStats, parseStatsMobile, parsePercentages, parseAdvanced, parsePercentagesMobile } from '@/utils/parsers';
import './DraftGuidePlayer.css';

interface Player {
  rank: number;
  name: string;
  height: string;
  weight: string;
  position: string;
  team: string;
  description: {
    content: string;
  };
  stats: {
    content: string;
  };
  percentages: {
    content: string;
  };
  advanced: {
    content: string;
  };
}

export default function DraftGuidePlayer({ player }: { player: Player }) {

  function getGamesPlayed(stats: string) {
    const statArr = stats.split(' ');
    return parseInt(statArr[0]);
  }

  const gamesPlayed = getGamesPlayed(player.stats.content);

  const [isOpen, setIsOpen] = useState(false);
  const [bottomDisplay, setBottomDisplay] = useState(false);

  const perGameStats = '' //parseStats(player.stats.content, gamesPlayed);
  const perGameMobileStats = '' //parseStatsMobile(player.stats.content, gamesPlayed);
  const percentageStats = '' //parsePercentages(player.percentages.content, gamesPlayed);
  const percentageMobileStats = '' //parsePercentagesMobile(player.percentages.content, gamesPlayed);
  const advancedStats = '' //parseAdvanced(player.advanced.content);

  const openButton = () => {
    if (isOpen) {
      setBottomDisplay(prevState => !prevState);
    } else {
      setTimeout(() => {
        setBottomDisplay(prevState => !prevState);
      }, 300);
    }
    setIsOpen(prevState => !prevState);
  }

  const handleClick = () => {
    openButton();
  };

  return (
    <div className='draft-guide-player-container'>
      <button onClick={handleClick} className={`draft-guide-player-button ${isOpen ? 'button-open' : 'button-close'}`}>
        <div className='draft-guide-player-main-info'>
          <div className='draft-guide-player-rank'>
              <span className='rank-text'>{player.rank}</span>
          </div>
          <div className='draft-guide-player-name'>
              <span className={`${player.name.length < 18 ? "player-name" : (player.name.length < 22 ? "player-name-long" : "player-name-longer")}`}>{player.name}</span>
          </div>
          <span className={`${player.name.length < 18 ? "info-text" : "player-name-long"} draft-text-desktop`}>{player.team}</span>
          <span className={`${player.name.length < 18 ? "info-text" : (player.name.length < 22 ? "player-name-long" : "player-name-longer")} draft-text-position`}>{player.position}</span>
          <div className='draft-guide-player-size'>
              <span>Height: {player.height}</span>
              <span>Weight: {player.weight}</span>
          </div>
          <div className='draft-guide-side-stats'>
            {bottomDisplay && <span className='general-stat-text'>{perGameStats}</span>}
          </div>
        </div>
        <div className={`draft-guide-box-separator ${isOpen ? 'box-width-open' : 'box-width-close'}`}/>
        {bottomDisplay && (
            <>
              <div className='draft-guide-mobile-stats'>
                <div className='draft-player-info-container'>
                  <span className='general-stat-text'>{perGameMobileStats}</span>
                </div>
                <div className='draft-guide-box-separator box-width-open'/>
              </div>
              <div className='box-flex-display'>
                <>
                  <div className='draft-player-info-container draft-text-mobile'>
                    {percentageMobileStats}
                  </div>
                  <div className='draft-player-info-container draft-text-desktop'>
                    {percentageStats}
                  </div>
                </>
                <div className='draft-guide-mobile-stats draft-guide-box-separator box-width-open'/>
                <div className='pin-right draft-player-info-container'>
                  {advancedStats}
                </div>
              </div>
              <div className='draft-guide-box-separator box-width-open'/>
              <div className='draft-player-info-container'>
                <span className='general-stat-text'>{player.description.content}</span>
              </div>
            </>
          )}
        {!bottomDisplay && (
          <>
            <div className='draft-player-info-container draft-text-mobile'>
              {perGameMobileStats}
            </div>
            <div className='draft-player-info-container draft-text-desktop'>
              {perGameStats}
            </div>
          </>
        )}
      </button>
    </div>
  );
};