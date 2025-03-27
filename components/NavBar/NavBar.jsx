"use client";

import '../../app/globals.css';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuPopup from './MenuPopup/MenuPopup';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <Image className='flex items-center' src={'/logo.jpg'} alt="Double Double Logo" width={72} height={72} />
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link className='text-blue-700' href="/">Home</Link>
                    <Link className='text-blue-700' href="/draftGuide">Draft Guide</Link>
                    <Link className='text-blue-700' href="/blog">Blog</Link>
                    <Link className='text-blue-700' href="/contact">Contact Us</Link>
                </div>
                <div className="md:hidden">
                <button onClick={handleMenuToggle} className="text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden">
                    <MenuPopup onClick={handleMenuToggle} active={menuOpen} />
                </div>
            )}
        </nav>
    );
}