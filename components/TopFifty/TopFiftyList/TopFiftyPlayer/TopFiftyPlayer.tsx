"use client";
import * as React from 'react';
import { useState } from 'react';
import { parseStats, parseStatsMobile, parsePercentages, parseAdvanced, parsePercentagesMobile } from '@/utils/parsers';
import './TopFiftyPlayer.css';

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

export default function TopFiftyPlayer({ player }: { player: Player }) {
    function getGamesPlayed(stats: string) {
        const statArr = stats.split(' ');
        return parseInt(statArr[0]);
    }

    const gamesPlayed = getGamesPlayed(player.stats);
    const [isOpen, setIsOpen] = useState(false);
    const [bottomDisplay, setBottomDisplay] = useState(false);

    const perGameStats = parseStats(player.stats, gamesPlayed);
    const perGameMobileStats = parseStatsMobile(player.stats, gamesPlayed);
    const percentageStats = parsePercentages(player.percentages, gamesPlayed);
    const percentageMobileStats = parsePercentagesMobile(player.percentages, gamesPlayed);
    const advancedStats = parseAdvanced(player.advanced);

    const openButton = () => {
        if (isOpen) {
            setBottomDisplay(prevState => !prevState);
        } else {
            setTimeout(() => {
                setBottomDisplay(prevState => !prevState);
            }, 300);
        }
        setIsOpen(prevState => !prevState);
    };

    const nameSizeClass = player.name.length < 18 
        ? "text-[20px]" 
        : player.name.length < 22 
            ? "text-[18px] md:text-[20px]" 
            : "text-[14px] md:text-[16px]";

    return (
        <div className="flex w-full md:px-[5%] justify-center sm:px-0">
            <button 
                onClick={openButton}
                className={`font-roboto bg-[#6CC5FE] flex flex-col items-center transition-all duration-300 ${
                    isOpen 
                        ? "w-full md:w-[1000px] border-4 border-black" 
                        : "w-full md:w-[650px] border-2 border-black"
                }`}
            >
                {/* Main Player Info */}
                <div className="flex items-center gap-[10px] py-[1%] w-full">
                    {/* Player Photo Placeholder */}
                    <div className="hidden md:block ml-[10px]">
                        <div className="w-[80px] h-[80px] bg-gray-400 rounded-lg flex items-center justify-center border-2 border-black">
                            <span className="text-white font-bold text-xs">Photo</span>
                        </div>
                    </div>
                    
                    {/* Rank */}
                    <div className="px-[5px]">
                        <span className="font-bold text-[24px] text-white [text-shadow:2px_2px_black]">
                            {player.rank}
                        </span>
                    </div>
                    
                    {/* Name and Team Info */}
                    <div className="flex flex-col gap-[5px]">
                        <div className="ml-[5px]">
                            <span className={`font-bold ${nameSizeClass}`}>
                                {player.name}
                            </span>
                        </div>
                        {/* Team (always visible) */}
                        <span className={`${nameSizeClass} ml-[5px] text-[14px]`}>
                            {player.team}
                        </span>
                    </div>
                    
                    {/* Position */}
                    <span className={`${nameSizeClass} ml-auto md:ml-0`}>
                        {player.position}
                    </span>
                    
                    {/* Size Info */}
                    <div className="hidden md:flex flex-col gap-[5px] ml-auto mr-[10px]">
                        <span>Height: {player.height}</span>
                        <span>Weight: {player.weight}</span>
                    </div>
                    
                    {/* Side Stats (desktop) */}
                    {bottomDisplay && (
                        <div className="ml-auto mr-[10px] hidden md:block">
                            <span className="text-[16px] font-bold">
                                {perGameStats}
                            </span>
                        </div>
                    )}
                </div>
                
                {/* Separator */}
                <div className={`h-[2px] bg-black transition-all duration-300 ${
                    isOpen 
                        ? "w-full md:w-[996px]" 
                        : "w-full md:w-[646px]"
                }`} />
                
                {/* Expanded Content */}
                {bottomDisplay && (
                    <>
                        {/* Mobile Stats */}
                        <div className="w-full md:hidden">
                            <div className="p-[2%]">
                                <span className="text-[16px] font-bold">
                                    {perGameMobileStats}
                                </span>
                            </div>
                            <div className="h-[2px] w-full bg-black" />
                        </div>
                        
                        {/* Percentage Stats */}
                        <div className="flex flex-col md:flex-row w-full">
                            <div className="p-[2%] md:hidden">
                                {percentageMobileStats}
                            </div>
                            <div className="p-[2%] hidden md:block">
                                {percentageStats}
                            </div>
                            <div className="h-[2px] w-full bg-black md:hidden" />
                            
                            {/* Advanced Stats */}
                            <div className="p-[2%] ml-auto">
                                {advancedStats}
                            </div>
                        </div>
                        
                        <div className="h-[2px] w-full bg-black" />
                        
                        {/* Description */}
                        <div className="p-[2%]">
                            <span className="text-[16px] font-bold">
                                {player.description}
                            </span>
                        </div>
                    </>
                )}
                
                {/* Collapsed Stats */}
                {!bottomDisplay && (
                    <>
                        <div className="p-[2%] md:hidden">
                            {perGameMobileStats}
                        </div>
                        <div className="p-[2%] hidden md:block">
                            {perGameStats}
                        </div>
                    </>
                )}
            </button>
        </div>
    );
}
