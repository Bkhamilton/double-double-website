"use client";
import React, { useState, useEffect, useRef } from 'react';
import BlogPostCard from '../BlogPostCard/BlogPostCard';

export default function BlogList({ posts }) {
    const [displayedPosts, setDisplayedPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const observerTarget = useRef(null);
    
    const POSTS_PER_PAGE = 6;

    // Initialize with first batch of posts
    useEffect(() => {
        const initialPosts = posts.slice(0, POSTS_PER_PAGE);
        setDisplayedPosts(initialPosts);
        setHasMore(posts.length > POSTS_PER_PAGE);
    }, [posts]);

    // Load more posts
    const loadMorePosts = () => {
        if (loading || !hasMore) return;

        setLoading(true);
        
        // Simulate loading delay (remove in production)
        setTimeout(() => {
            const startIndex = page * POSTS_PER_PAGE;
            const endIndex = startIndex + POSTS_PER_PAGE;
            const newPosts = posts.slice(startIndex, endIndex);
            
            if (newPosts.length > 0) {
                setDisplayedPosts(prev => [...prev, ...newPosts]);
                setPage(prev => prev + 1);
                setHasMore(endIndex < posts.length);
            } else {
                setHasMore(false);
            }
            
            setLoading(false);
        }, 500);
    };

    // Intersection Observer for infinite scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    loadMorePosts();
                }
            },
            { threshold: 0.1 }
        );

        const currentTarget = observerTarget.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [hasMore, loading, page]);

    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Section Title */}
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
                    Latest Articles
                </h2>
                <div className="h-1 w-24 bg-blue-500 mt-2"></div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {displayedPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>

            {/* Loading Indicator */}
            {loading && (
                <div className="flex justify-center py-8">
                    <div className="flex items-center gap-3 text-blue-400">
                        <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-lg font-semibold">Loading more articles...</span>
                    </div>
                </div>
            )}

            {/* Intersection Observer Target */}
            <div ref={observerTarget} className="h-10"></div>

            {/* End Message */}
            {!hasMore && displayedPosts.length > 0 && (
                <div className="text-center py-8">
                    <p className="text-gray-400 text-lg">
                        You&apos;ve reached the end! Check back soon for more articles.
                    </p>
                </div>
            )}
        </div>
    );
}
