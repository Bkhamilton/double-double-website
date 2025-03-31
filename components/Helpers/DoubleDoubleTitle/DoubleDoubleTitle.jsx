import * as React from 'react';

export default function DoubleDoubleTitle() {
    return (
        <div className="group pt-[2%] text-center cursor-default overflow-hidden py-8">
            {/* 3D Text Effect */}
            <div className="relative inline-block transform transition-all duration-500 group-hover:scale-[1.05]">
                {/* Shadow layer */}
                <h1 className="text-white/30 absolute inset-0 translate-x-2 translate-y-2 
                    text-[52px] md:text-[48px] sm:text-[44px] xs:text-[40px] 
                    font-bold tracking-tight drop-shadow-lg">
                    The Double Double
                </h1>
                {/* Main text */}
                <h1 className="relative text-white
                    text-[52px] md:text-[48px] sm:text-[44px] xs:text-[40px] 
                    font-bold tracking-tight 
                    transition-all duration-300 
                    drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]
                    group-hover:drop-shadow-[0_6px_12px_rgba(255,255,255,0.3)]">
                    The Double Double
                </h1>
            </div>

            {/* Host text with animated underline */}
            <div className="relative mt-2 md:mt-0 sm:mt-0 mx-auto max-w-[90%]">
                <span className="font-roboto font-bold text-white/80 
                    text-[20px] md:text-[18px] sm:text-[16px] xs:text-[15px]
                    relative inline-block
                    before:content-[''] before:absolute before:-bottom-1 before:left-0 
                    before:w-0 before:h-0.5 before:bg-white before:opacity-90
                    before:transition-all before:duration-500
                    group-hover:before:w-full">
                    Hosted by JP Carey and Ben Hamilton
                </span>
            </div>

            {/* Enhanced floating dots decoration */}
            <div className="flex justify-center mt-6 space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 w-full">
                {[...Array(5)].map((_, i) => (
                    <div 
                        key={i} 
                        className="w-3 h-3 rounded-full bg-white/90
                        transform transition-all duration-1000 
                        group-hover:translate-y-2 group-hover:scale-125
                        shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]
                        group-hover:shadow-[0_0_12px_4px_rgba(255,255,255,0.9)]"
                        style={{ 
                            animationDelay: `${i * 100}ms`,
                            willChange: 'transform, opacity, box-shadow'
                        }} 
                    />
                ))}
            </div>
        </div>
    );
}