"use client";
import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa';

export default function HighlightedBlogPost({ post }) {
    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-1/2 relative h-64 md:h-auto">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={true}
                        />
                        <div className="absolute top-4 left-4 bg-yellow-500 text-black font-bold px-4 py-2 rounded-full text-sm">
                            FEATURED
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        {/* Category and Metadata */}
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-200">
                            <span className="flex items-center gap-2 bg-blue-700/50 px-3 py-1 rounded-full">
                                <FaTag className="text-yellow-400" />
                                <span className="font-bold text-sm">{post.category}</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <FaCalendarAlt className="text-blue-300" />
                                <span className="text-sm">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <FaClock className="text-blue-300" />
                                <span className="text-sm">{post.readTime}</span>
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
                            {post.title}
                        </h1>

                        {/* Author */}
                        <p className="text-blue-200 font-semibold mb-4">
                            By {post.author}
                        </p>

                        {/* Excerpt */}
                        <p className="text-gray-200 text-lg leading-relaxed mb-6">
                            {post.excerpt}
                        </p>

                        {/* Read More Button */}
                        <div>
                            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg">
                                Read Full Article
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
