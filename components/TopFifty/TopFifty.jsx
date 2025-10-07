"use client";
import React, { useState } from 'react';
import TopFiftyList from './TopFiftyList/TopFiftyList';
import { benTop50 } from '@/data/benTop50';
import { jpTop50 } from '@/data/jpTop50';

export default function TopFifty() {
    const [selectedList, setSelectedList] = useState('ben'); // 'ben' or 'jp'
    
    const players = selectedList === 'ben' ? benTop50 : jpTop50;
    const currentName = selectedList === 'ben' ? 'Ben Hamilton' : 'JP Carey';
    const otherName = selectedList === 'ben' ? 'JP' : 'Ben';
    
    return (
        <div>
            <h1 className="text-center text-4xl md:text-5xl font-bold text-white py-12
                    [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]"
            >
                Top 50 NBA Players
            </h1>
            <div className="text-center px-6 pb-4">
                <p className="text-white/80 text-lg md:text-xl italic">
                    Showing {currentName}'s Rankings
                </p>
            </div>
            
            {/* Toggle Buttons */}
            <div className="flex justify-center gap-4 px-6 pb-8">
                <button
                    onClick={() => setSelectedList('ben')}
                    className={`px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                        selectedList === 'ben'
                            ? 'bg-blue-600 text-white scale-105 shadow-lg'
                            : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                    }`}
                >
                    Ben's List
                </button>
                <button
                    onClick={() => setSelectedList('jp')}
                    className={`px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                        selectedList === 'jp'
                            ? 'bg-blue-600 text-white scale-105 shadow-lg'
                            : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                    }`}
                >
                    JP's List
                </button>
            </div>
            
            <TopFiftyList players={players} otherName={otherName}/>
        </div>
    );
}
