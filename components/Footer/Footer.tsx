"use client";

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Socials from '../Helpers/Socials/Socials';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px'
            }
        );

        const currentLogo = logoRef.current;
        if (currentLogo) {
            observer.observe(currentLogo);
        }

        return () => {
            if (currentLogo) {
                observer.unobserve(currentLogo);
            }
        };
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#0f4191] to-[#4287f5] shadow-lg px-[8%] py-[4%] md:px-[4%] sm:px-[2%] sm:py-[6%]">
            <div className="container mx-auto">
                {/* Top section with navigation and logo */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-6">
                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-white font-bold text-[22px] mb-4">Quick Links</h3>
                        <ul className="block list-none space-y-2">
                            <li className="whitespace-nowrap">
                                <Link href="/" className="text-white no-underline hover:text-blue-200 transition-colors duration-300">
                                    <span className="font-roboto text-[18px] font-semibold sm:text-[16px]">Home</span>
                                </Link>
                            </li>
                            <li className="whitespace-nowrap">
                                <Link href="/draftGuide" className="text-white no-underline hover:text-blue-200 transition-colors duration-300">
                                    <span className="font-roboto text-[18px] font-semibold sm:text-[16px]">Draft Guide</span>
                                </Link>
                            </li>
                            <li className="whitespace-nowrap">
                                <Link href="/topfifty" className="text-white no-underline hover:text-blue-200 transition-colors duration-300">
                                    <span className="font-roboto text-[18px] font-semibold sm:text-[16px]">Top 50</span>
                                </Link>
                            </li>
                            <li className="whitespace-nowrap">
                                <Link href="/blog" className="text-white no-underline hover:text-blue-200 transition-colors duration-300">
                                    <span className="font-roboto text-[18px] font-semibold sm:text-[16px]">Blog</span>
                                </Link>
                            </li>
                            <li className="whitespace-nowrap">
                                <Link href="/contact-us" className="text-white no-underline hover:text-blue-200 transition-colors duration-300">
                                    <span className="font-roboto text-[18px] font-semibold sm:text-[16px]">Contact Us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Logo with scroll animation */}
                    <div 
                        ref={logoRef}
                        className={`flex flex-col items-center transition-all duration-1000 ${
                            isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <Image 
                            src={'/logo.JPG'} 
                            alt="Double Double Logo" 
                            className="h-[150px] w-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 sm:h-[120px]" 
                            width={150} 
                            height={150}
                        />
                        <p className="mt-3 text-center">
                            <span className="font-roboto text-[14px] text-white/80">Designed by Ben Hamilton</span>
                        </p>
                    </div>
                </div>

                {/* Social Media Links Section */}
                <div className="border-t border-white/20 pt-6">
                    <h3 className="text-white font-bold text-[22px] text-center mb-4">Connect With Us</h3>
                    <Socials />
                </div>

                {/* Copyright Section */}
                <div className="border-t border-white/20 mt-6 pt-4 text-center">
                    <p className="text-white/70 text-[14px]">
                        © {new Date().getFullYear()} The Double Double Podcast. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};
