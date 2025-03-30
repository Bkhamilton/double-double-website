"use client";
import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaSpotify, FaApple, FaCalendarAlt, FaPodcast, FaClock, FaMusic } from 'react-icons/fa';
import { truncateDescription, convertTime, formatDuration } from '@/utils/episodeHelpers';

export default function EpisodeNode({ episode }) {
    const [formattedDuration, setFormattedDuration] = useState("");
    const [formattedReleaseDate, setFormattedReleaseDate] = useState("");
    const fontSizeClass = episode.name.length < 42 ? "text-[48px]" : "text-[42px]";

    useEffect(() => {
        const durationInMs = episode.duration_ms;
        setFormattedDuration(formatDuration(durationInMs));
    
        const releaseDate = episode.release_date;
        setFormattedReleaseDate(convertTime(releaseDate));
    }, [episode]);

    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Episode Info */}
                    <div className="flex-1 space-y-4">
                        {/* Metadata */}
                        <div className="font-roboto text-[18px] text-[#EFEFEF] font-bold italic [text-shadow:1px_1px_black] flex gap-4">
                            <span className="flex items-center gap-1">
                                <FaCalendarAlt className="text-blue-400" />
                                {formattedReleaseDate}
                            </span>
                            <span className="flex items-center gap-1">
                                <FaPodcast className="text-blue-400" />
                                Season 3
                            </span>
                            <span className="flex items-center gap-1">
                                <FaClock className="text-blue-400" />
                                {formattedDuration}
                            </span>
                        </div>

                        {/* Title with dynamic font size */}
                        <h1 className={`font-bold text-white [text-shadow:2px_2px_black] ${fontSizeClass}`}>
                            {episode.name}
                        </h1>

                        {/* Description */}
                        <p className="font-roboto font-bold text-[18px] text-gray-300 leading-relaxed">
                            {truncateDescription(episode.description, 320)}
                        </p>

                        {/* Listen Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a 
                                href={episode.external_urls.spotify} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="h-[78px] bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-[12px] flex items-center justify-center px-6 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-3 w-[206px] justify-center">
                                    <FaSpotify className="text-3xl" />
                                    <span className="font-bold text-xl">Listen on Spotify</span>
                                </div>
                            </a>
                            <a 
                                href={episode.external_urls.apple} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="h-[78px] bg-[#A3AAAE] hover:bg-[#FFFFFF] text-black rounded-[12px] flex items-center justify-center px-6 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-3 w-[300px] justify-center">
                                    <FaApple className="text-3xl" />
                                    <span className="font-bold text-xl">Apple Podcasts</span>
                                </div>
                            </a>
                        </div>

                        {/* Audio Player */}
                        <div className="mt-6 bg-[#171717] rounded-lg p-4 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <FaMusic className="text-blue-400" />
                                <span>Episode Preview</span>
                            </div>
                            <audio controls className="w-full">
                                <source src={episode.audio_preview_url} type="audio/mpeg" />
                                <track kind="captions" label="English" default />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-full aspect-square max-w-md rounded-lg overflow-hidden border-2 border-blue-400/30">
                            <Image
                                src={'/logo.JPG'}
                                alt="Double Double Logo"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}