"use client";
import * as React from 'react';
import { useState } from 'react';
import { 
  FaSpotify, 
  FaApple, 
  FaGoogle, 
  FaTiktok, 
  FaInstagram, 
  FaTwitter,
  FaEnvelope,
  FaPaperPlane
} from 'react-icons/fa';

export default function ContactUs() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
  
    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Add your email sending logic here
            setAlert("Message sent successfully!");
            setEmail("");
            setMessage("");
        } catch (error) {
            setAlert("Failed to send message. Please try again.");
            throw error; // Rethrow the error for further handling if needed
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white/10 backdrop-blur-lg md:rounded-2xl shadow-xl overflow-hidden w-full max-w-6xl mx-auto border border-white/20">
            <div className="flex flex-col lg:flex-row">
                {/* Social Media Section */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white lg:w-2/5">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <FaEnvelope className="text-blue-200" />
                        Connect With Us
                    </h2>
                    
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-medium text-blue-100 mb-4">Listen to the Podcast</h3>
                            <div className="flex gap-4">
                                <a 
                                    href="https://open.spotify.com/show/6HKVei1HZ3XodZkO5KkEK3" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-4xl text-white hover:text-[#1DB954] transition-colors duration-300"
                                    aria-label="Spotify"
                                >
                                    <FaSpotify />
                                </a>
                                <a 
                                    href="https://podcasts.apple.com/us/podcast/the-chase-down/id1555765326?itsct=podcast_box&itscg=30200" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-4xl text-white hover:text-[#A3AAAE] transition-colors duration-300"
                                    aria-label="Apple Podcasts"
                                >
                                    <FaApple />
                                </a>
                                <a 
                                    href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy80MmFhYzgxOC9wb2RjYXN0L3Jzcw==" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-4xl text-white hover:text-[#4285F4] transition-colors duration-300"
                                    aria-label="Google Podcasts"
                                >
                                    <FaGoogle />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-medium text-blue-100 mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a 
                                    href="https://www.tiktok.com/@doubledoublepod" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-4xl text-white hover:text-[#FE2C55] transition-colors duration-300"
                                    aria-label="TikTok"
                                >
                                    <FaTiktok />
                                </a>
                                <a 
                                    href="https://www.instagram.com/thedoubledoublepod/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-4xl text-white hover:text-[#E4405F] transition-colors duration-300"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </a>
                                <a 
                                    href="https://twitter.com/thedoubl2" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-4xl text-white hover:text-[#1DA1F2] transition-colors duration-300"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="p-8 lg:p-12 bg-white lg:w-3/5">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                            />
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your message here..."
                                rows={4}
                                value={message}
                                onChange={handleMessageChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                            />
                        </div>
                        
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <FaPaperPlane />
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        
                        {alert && (
                            <div className={`mt-4 p-3 rounded-lg text-sm font-medium ${
                                alert.includes("success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}>
                                {alert}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};