import React from 'react';
import DoubleDoubleTitle from '@/components/Helpers/DoubleDoubleTitle/DoubleDoubleTitle';
import HighlightedBlogPost from './HighlightedBlogPost/HighlightedBlogPost';
import BlogList from './BlogList/BlogList';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
    // Get the featured post
    const featuredPost = blogPosts.find(post => post.featured);
    
    // Get all non-featured posts
    const regularPosts = blogPosts.filter(post => !post.featured);

    return (
        <div>
            <DoubleDoubleTitle/>
            
            {/* Page Title */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2 [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
                    Double Double Blog
                </h1>
                <p className="text-center text-gray-300 text-lg">
                    Your source for NBA insights, analysis, and predictions
                </p>
            </div>

            {/* Featured Blog Post */}
            {featuredPost && <HighlightedBlogPost post={featuredPost} />}
            
            {/* Blog List with Infinite Scroll */}
            <BlogList posts={regularPosts} />
        </div>
    );
};

export default Blog;