import React from 'react';
import ContactUs from './ContactUs/ContactUs';

const Contact = () => {
    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto md:px-4 lg:px-8">  
                {/* Enhanced Contact Us Heading */}
                <h1 className="text-center text-4xl md:text-5xl font-bold text-white mb-12 mt-8
                    [text-shadow:0_2px_4px_rgba(0,0,0,0.3)] 
                    relative after:content-[''] after:absolute after:bottom-[-12px] after:left-1/2 
                    after:w-24 after:h-1 after:bg-blue-500 after:transform after:translate-x-[-50%]">
                    Contact Us
                </h1>
                
                <div className="flex justify-center">
                    <ContactUs/>
                </div>
            </div>
        </div>
    );
};

export default Contact;