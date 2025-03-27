"use client";

import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link';

interface MenuPopupProps {
    onClick: () => void;
    active: boolean;
}

const MenuPopup: React.FC<MenuPopupProps> = ({ onClick, active }) => {
    return (
        <div className={`fixed top-0 left-0 w-4/5 h-full bg-white z-50 ${active ? 'block' : 'hidden'}`}>
            <button className="absolute top-4 right-4 text-gray-700 focus:outline-none" onClick={onClick}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <ul className="mt-16 space-y-4 text-left items-start p-4">
                <li>
                    <Link href="/" className="text-blue-700 block py-2" onClick={onClick}>Home</Link>
                </li>
                <li>
                    <Link href="/draftGuide" className="text-blue-700 block py-2" onClick={onClick}>Draft Guide</Link>
                </li>
                <li>
                    <Link href="/blog" className="text-blue-700 block py-2" onClick={onClick}>Blog</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-blue-700 block py-2" onClick={onClick}>Contact Us</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuPopup;