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
        <nav className="bg-gradient-to-r from-[#0f4191] to-[#4287f5] shadow-lg">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <Image className='flex items-center rounded-lg hover:scale-105 transition-transform duration-300' src={'/logo.JPG'} alt="Double Double Logo" width={72} height={72} />
                    </Link>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link className='text-white font-semibold text-lg hover:text-blue-200 hover:scale-110 transition-all duration-300' href="/">Home</Link>
                    <Link className='text-white font-semibold text-lg hover:text-blue-200 hover:scale-110 transition-all duration-300' href="/draftGuide">Draft Guide</Link>
                    <Link className='text-white font-semibold text-lg hover:text-blue-200 hover:scale-110 transition-all duration-300' href="/topfifty">Top Fifty</Link>
                    <Link className='text-white font-semibold text-lg hover:text-blue-200 hover:scale-110 transition-all duration-300' href="/blog">Blog</Link>
                    <Link className='text-white font-semibold text-lg hover:text-blue-200 hover:scale-110 transition-all duration-300' href="/contact">Contact Us</Link>
                </div>
                <div className="md:hidden">
                <button onClick={handleMenuToggle} className="text-white focus:outline-none hover:text-blue-200 transition-colors duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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