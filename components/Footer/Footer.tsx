import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="bg-gray-50 px-[12%] py-[3%] flex justify-between items-center md:px-[4%] sm:px-[2%] sm:py-[4%]">
            <ul className="block list-none">
                <li className="my-[10px] whitespace-nowrap sm:my-[5px] sm:py-[1%]">
                    <Link href="/" className="mr-[15px] text-gray-800 no-underline hover:text-blue-600 transition-colors duration-300">
                        <span className="font-roboto text-[26px] font-bold sm:text-[20px]">Home</span>
                    </Link>
                </li>
                <li className="my-[10px] whitespace-nowrap sm:my-[5px] sm:py-[1%]">
                    <Link href="/draft-guide" className="mr-[15px] text-gray-800 no-underline hover:text-blue-600 transition-colors duration-300">
                        <span className="font-roboto text-[26px] font-bold sm:text-[20px]">Draft Guide</span>
                    </Link>
                </li>
                <li className="my-[10px] whitespace-nowrap sm:my-[5px] sm:py-[1%]">
                    <Link href="/blog" className="mr-[15px] text-gray-800 no-underline hover:text-blue-600 transition-colors duration-300">
                        <span className="font-roboto text-[26px] font-bold sm:text-[20px]">Blog</span>
                    </Link>
                </li>
                <li className="my-[10px] whitespace-nowrap sm:my-[5px] sm:py-[1%]">
                    <Link href="/contact-us" className="mr-[15px] text-gray-800 no-underline hover:text-blue-600 transition-colors duration-300">
                        <span className="font-roboto text-[26px] font-bold sm:text-[20px]">Contact Us</span>
                    </Link>
                </li>
            </ul>
            <div className="flex flex-col items-center">
                <Image 
                    src={'/logo.JPG'} 
                    alt="logo" 
                    className="h-[200px] w-auto sm:h-[150px] sm:ml-[35px]" 
                    width={200} 
                    height={200}
                />
                <p className="ml-[10px]">
                    <span className="font-roboto text-[16px]">Designed by Ben Hamilton</span>
                </p>
            </div>
        </div>
    );
};