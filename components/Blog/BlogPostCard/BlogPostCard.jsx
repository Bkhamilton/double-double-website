"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa';

export default function BlogPostCard({ post }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/blog/${post.id}`);
    };

    return (
        <div 
            onClick={handleClick}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
            {/* Image */}
            <div className="relative h-48 w-full">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-xs">
                    {post.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-3 mb-3 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-blue-400" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaClock className="text-blue-400" />
                        {post.readTime}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2 hover:text-blue-400 transition-colors cursor-pointer">
                    {post.title}
                </h3>

                {/* Author */}
                <p className="text-gray-400 text-sm mb-3">
                    By {post.author}
                </p>

                {/* Excerpt */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Read More Button */}
                <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors duration-300 flex items-center gap-2">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
