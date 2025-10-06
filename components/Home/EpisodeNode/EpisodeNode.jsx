"use client";
import React from 'react';
import Image from 'next/image';
import { FaSpotify, FaApple, FaCalendarAlt, FaPodcast, FaClock, FaMusic } from 'react-icons/fa';
import { convertTime, formatDuration } from '@/utils/episodeHelpers';

export default function EpisodeNode({ episode }) {
    const formattedDuration = formatDuration(episode.duration_ms);
    const formattedReleaseDate = convertTime(episode.release_date);

    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-1/2 relative h-64 md:h-auto">
                        <Image
                            src={'/logo.JPG'}
                            alt="Latest Episode"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={false}
                        />
                        <div className="absolute top-4 left-4 bg-blue-500 text-white font-bold px-4 py-2 rounded-full text-sm">
                            LATEST
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        {/* Metadata */}
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-200">
                            <span className="flex items-center gap-2 bg-purple-700/50 px-3 py-1 rounded-full">
                                <FaPodcast className="text-yellow-400" />
                                <span className="font-bold text-sm">Season {episode.season}</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <FaCalendarAlt className="text-purple-300" />
                                <span className="text-sm">{formattedReleaseDate}</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <FaClock className="text-purple-300" />
                                <span className="text-sm">{formattedDuration}</span>
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
                            {episode.name}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-200 text-lg leading-relaxed mb-6">
                            {episode.description}
                        </p>

                        {/* Listen Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <a 
                                href={episode.external_urls.spotify} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
                            >
                                <FaSpotify className="text-2xl" />
                                <span>Listen on Spotify</span>
                            </a>
                            <a 
                                href={episode.external_urls.apple} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-[#A3AAAE] hover:bg-[#FFFFFF] text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
                            >
                                <FaApple className="text-2xl" />
                                <span>Apple Podcasts</span>
                            </a>
                        </div>

                        {/* Audio Player */}
                        <div className="bg-purple-950/50 rounded-lg p-4 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <FaMusic className="text-purple-300" />
                                <span className="text-sm">Episode Preview</span>
                            </div>
                            <audio controls className="w-full">
                                <source src={episode.audio_preview_url} type="audio/mpeg" />
                                <track kind="captions" label="English" default />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}