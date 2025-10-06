import * as React from 'react';
import Image from 'next/image';
import { FaBasketballBall } from 'react-icons/fa';

export default function AboutUs() {
    const hosts = [
        {
            name: "Ben",
            teams: [
                { name: "Celtics", color: "#007A33" },
                { name: "Nuggets", color: "#0E2240" }
            ],
            image: "/ben.jpg" // Update with your image path
        },
        {
            name: "JP",
            teams: [
                { name: "Cavaliers", color: "#860038" }
            ],
            image: "/jp.jpg" // Update with your image path
        }
    ];

    // Function to determine gradient for multiple teams
    const getTeamGradient = (teams) => {
        if (teams.length === 1) {
        return `bg-[${teams[0].color}]`;
        }
        return `bg-gradient-to-r from-[${teams[0].color}] to-[${teams[1].color}]`;
    };

    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Desktop Layout */}
            <div className="hidden md:flex md:flex-row items-center gap-8">
                {/* Left Host Photo */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative group overflow-hidden rounded-lg aspect-square w-full max-w-xs border-2 border-blue-400/30">
                        <Image
                            src={hosts[0].image}
                            alt={`${hosts[0].name}'s photo`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 ${getTeamGradient(hosts[0].teams)} flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300 p-4`}>
                            <h3 className="text-2xl font-bold text-white mb-2">{hosts[0].name}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {hosts[0].teams.map((team, i) => (
                                    <span 
                                        key={i} 
                                        className="text-white px-3 py-1 rounded-full text-sm font-medium border-2 border-white/50"
                                        style={{ backgroundColor: team.color }}
                                    >
                                        {team.name}
                                    </span>
                                ))}
                            </div>
                            <p className="text-white/90 mt-4 text-center">
                                Diehard {hosts[0].teams.map(t => t.name).join(" and ")} fan
                            </p>
                        </div>
                    </div>
                </div>

                {/* Center Content Card */}
                <div className="w-full md:w-2/3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-2xl">
                    <h1 className="text-4xl font-bold text-white mb-8 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
                        About Us
                    </h1>
                    
                    <div className="mb-6">
                        <p className="font-roboto text-lg text-gray-300 leading-relaxed mb-6">
                            We're two passionate NBA fans from Massachusetts bringing you unfiltered basketball 
                            analysis and hot takes. While we have our favorite teams, we love watching and covering 
                            the entire league - from superstars to deep bench players.
                        </p>
                        
                        <div className="flex items-center text-blue-400">
                            <FaBasketballBall className="mr-2" />
                            <span className="font-bold italic">
                                Basketball isn't just a game - it's our obsession.
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Host Photo */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative group overflow-hidden rounded-lg aspect-square w-full max-w-xs border-2 border-blue-400/30">
                        <Image
                            src={hosts[1].image}
                            alt={`${hosts[1].name}'s photo`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 ${getTeamGradient(hosts[1].teams)} flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300 p-4`}>
                            <h3 className="text-2xl font-bold text-white mb-2">{hosts[1].name}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {hosts[1].teams.map((team, i) => (
                                    <span 
                                        key={i} 
                                        className="text-white px-3 py-1 rounded-full text-sm font-medium border-2 border-white/50"
                                        style={{ backgroundColor: team.color }}
                                    >
                                        {team.name}
                                    </span>
                                ))}
                            </div>
                            <p className="text-white/90 mt-4 text-center">
                                Diehard {hosts[1].teams[0].name} fan
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-2xl">
                <h1 className="text-3xl font-bold text-white mb-6 text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
                    About Us
                </h1>
                
                {/* Host Photos - Horizontal on Mobile */}
                <div className="flex justify-center gap-6 mb-6">
                    {hosts.map((host, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative overflow-hidden rounded-full w-24 h-24 border-2 border-blue-400/30">
                                <Image
                                    src={host.image}
                                    alt={`${host.name}'s photo`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-white mt-2">{host.name}</h3>
                            <div className="flex flex-wrap justify-center gap-1 mt-1">
                                {host.teams.map((team, i) => (
                                    <span 
                                        key={i} 
                                        className="text-white px-2 py-0.5 rounded-full text-xs font-medium"
                                        style={{ backgroundColor: team.color }}
                                    >
                                        {team.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Content */}
                <div>
                    <p className="font-roboto text-base text-gray-300 leading-relaxed mb-4">
                        We're two passionate NBA fans from Massachusetts bringing you unfiltered basketball 
                        analysis and hot takes. While we have our favorite teams, we love watching and covering 
                        the entire league - from superstars to deep bench players.
                    </p>
                    
                    <div className="flex items-center justify-center text-blue-400">
                        <FaBasketballBall className="mr-2" />
                        <span className="font-bold italic text-sm">
                            Basketball isn't just a game - it's our obsession.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}