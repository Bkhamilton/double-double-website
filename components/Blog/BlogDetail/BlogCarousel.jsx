"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function BlogCarousel({ posts }) {
    const scrollContainerRef = useRef(null);
    const router = useRouter();

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollPosition = direction === 'left'
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;
            
            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    const handlePostClick = (postId) => {
        router.push(`/blog/${postId}`);
    };

    return (
        <div className="relative">
            {/* Left Arrow */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:block"
                aria-label="Scroll left"
            >
                <FaChevronLeft className="text-xl" />
            </button>

            {/* Scrollable Container */}
            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {posts.map(post => (
                    <div
                        key={post.id}
                        onClick={() => handlePostClick(post.id)}
                        className="flex-none w-80 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                        {/* Image */}
                        <div className="relative h-48 w-full">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover"
                                sizes="320px"
                            />
                            <div className="absolute top-3 right-3 bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-xs">
                                {post.category}
                            </div>
                            {post.featured && (
                                <div className="absolute top-3 left-3 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-xs">
                                    FEATURED
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            {/* Metadata */}
                            <div className="flex flex-wrap items-center gap-3 mb-3 text-gray-400 text-sm">
                                <span className="flex items-center gap-1">
                                    <FaCalendarAlt className="text-blue-400" />
                                    {new Date(post.date).toLocaleDateString('en-US', { 
                                        month: 'short', 
                                        day: 'numeric', 
                                        year: 'numeric' 
                                    })}
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaClock className="text-blue-400" />
                                    {post.readTime}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 hover:text-blue-400 transition-colors">
                                {post.title}
                            </h3>

                            {/* Author */}
                            <p className="text-gray-400 text-sm mb-3">
                                By {post.author}
                            </p>

                            {/* Excerpt */}
                            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                                {post.excerpt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hidden md:block"
                aria-label="Scroll right"
            >
                <FaChevronRight className="text-xl" />
            </button>

            {/* Custom CSS to hide scrollbar */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
