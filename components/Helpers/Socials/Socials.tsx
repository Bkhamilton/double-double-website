import * as React from 'react';
import { FaSpotify, FaApple, FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Socials() {
    return (
        <div className="flex justify-center space-x-6 md:space-x-8 lg:space-x-10 py-4">
            <Link 
                href="https://open.spotify.com/show/6HKVei1HZ3XodZkO5KkEK3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#1ed760] transition-all duration-300 text-3xl md:text-4xl lg:text-5xl hover:scale-110 drop-shadow-lg"
                aria-label="Spotify"
            >
                <FaSpotify />
            </Link>
            
            <Link 
                href="https://podcasts.apple.com/us/podcast/the-chase-down/id1555765326?itsct=podcast_box&itscg=30200" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-all duration-300 text-3xl md:text-4xl lg:text-5xl hover:scale-110 drop-shadow-lg"
                aria-label="Apple Podcasts"
            >
                <FaApple />
            </Link>
            
            <Link 
                href="https://www.tiktok.com/@doubledoublepod" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#FE2C55] transition-all duration-300 text-3xl md:text-4xl lg:text-5xl hover:scale-110 drop-shadow-lg"
                aria-label="TikTok"
            >
                <FaTiktok />
            </Link>
            
            <Link 
                href="https://www.instagram.com/thedoubledoublepod/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#E4405F] transition-all duration-300 text-3xl md:text-4xl lg:text-5xl hover:scale-110 drop-shadow-lg"
                aria-label="Instagram"
            >
                <FaInstagram />
            </Link>
            
            <Link 
                href="https://twitter.com/thedoubl2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#1DA1F2] transition-all duration-300 text-3xl md:text-4xl lg:text-5xl hover:scale-110 drop-shadow-lg"
                aria-label="Twitter"
            >
                <FaTwitter />
            </Link>
        </div>
    );
}