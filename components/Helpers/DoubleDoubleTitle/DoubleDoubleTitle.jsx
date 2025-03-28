import * as React from 'react';

export default function DoubleDoubleTitle() {
    return (
        <div className="group pt-[2%] text-center cursor-default overflow-hidden py-8">
            {/* 3D Text Effect */}
            <div className="relative inline-block transform transition-all duration-500 group-hover:scale-[1.05]">
                {/* Shadow layer */}
                <h1 className="text-gray-700 opacity-30 absolute inset-0 translate-x-2 translate-y-2 
                    text-[52px] md:text-[48px] sm:text-[44px] xs:text-[40px] 
                    font-bold tracking-tight">
                    The Double Double
                </h1>
                {/* Main text */}
                <h1 className="relative text-gray-900 group-hover:text-gray-800
                    text-[52px] md:text-[48px] sm:text-[44px] xs:text-[40px] 
                    font-bold tracking-tight 
                    transition-colors duration-300 
                    [text-shadow:0_4px_8px_rgba(0,0,0,0.2)]">
                    The Double Double
                </h1>
            </div>

            {/* Host text with animated underline */}
            <div className="relative mt-2 md:mt-0 sm:mt-0 mx-auto max-w-[90%]">
                <span className="font-roboto font-bold text-gray-700/80 
                    text-[20px] md:text-[18px] sm:text-[16px] xs:text-[15px]
                    relative inline-block
                    before:content-[''] before:absolute before:-bottom-1 before:left-0 
                    before:w-0 before:h-0.5 before:bg-gray-500 before:opacity-70
                    before:transition-all before:duration-500
                    group-hover:before:w-full">
                    Hosted by JP Carey and Ben Hamilton
                </span>
            </div>

            {/* Floating dots decoration - now with constrained width */}
            <div className="flex justify-center mt-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 w-full">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-gray-500/60 
                        transform transition-all duration-1000 
                        group-hover:translate-y-1 group-hover:scale-110"
                        style={{ animationDelay: `${i * 100}ms` }} />
                ))}
            </div>
        </div>
    );
}