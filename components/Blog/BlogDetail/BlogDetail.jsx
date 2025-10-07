"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaTag, FaChevronLeft } from 'react-icons/fa';
import { blogPosts } from '@/data/blogPosts';
import BlogCarousel from './BlogCarousel';
import DoubleDoubleTitle from '@/components/Helpers/DoubleDoubleTitle/DoubleDoubleTitle';

export default function BlogDetail() {
    const params = useParams();
    const router = useRouter();
    const postId = parseInt(params.id as string);
    
    const post = blogPosts.find(p => p.id === postId);
    const otherPosts = blogPosts.filter(p => p.id !== postId);
    
    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
                    <button 
                        onClick={() => router.push('/blog')}
                        className="text-blue-400 hover:text-blue-300 font-semibold"
                    >
                        Return to Blog
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen">
            <DoubleDoubleTitle />
            
            {/* Back Button */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <button
                    onClick={() => router.push('/blog')}
                    className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors duration-300 group mb-6"
                >
                    <FaChevronLeft className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="text-lg font-semibold">Back to Blog</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <article className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl">
                    {/* Featured Image */}
                    <div className="relative h-64 md:h-96 w-full">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            priority
                        />
                        <div className="absolute top-4 right-4 bg-blue-600 text-white font-bold px-4 py-2 rounded-full text-sm">
                            {post.category}
                        </div>
                        {post.featured && (
                            <div className="absolute top-4 left-4 bg-yellow-500 text-black font-bold px-4 py-2 rounded-full text-sm">
                                FEATURED
                            </div>
                        )}
                    </div>

                    {/* Article Content */}
                    <div className="p-6 md:p-10">
                        {/* Metadata */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
                            <span className="flex items-center gap-2">
                                <FaCalendarAlt className="text-blue-400" />
                                {new Date(post.date).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </span>
                            <span className="flex items-center gap-2">
                                <FaClock className="text-blue-400" />
                                {post.readTime}
                            </span>
                            <span className="flex items-center gap-2">
                                <FaTag className="text-blue-400" />
                                {post.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
                            {post.title}
                        </h1>

                        {/* Author */}
                        <p className="text-gray-400 text-lg mb-8">
                            By {post.author}
                        </p>

                        {/* Divider */}
                        <div className="h-1 w-24 bg-blue-500 mb-8"></div>

                        {/* Content */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                                {post.content}
                            </p>
                        </div>
                    </div>
                </article>
            </div>

            {/* Related Posts Carousel */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
                        More Articles
                    </h2>
                    <div className="h-1 w-24 bg-blue-500 mt-2"></div>
                </div>
                <BlogCarousel posts={otherPosts} />
            </div>
        </div>
    );
}
