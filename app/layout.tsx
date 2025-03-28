import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from '@/components/NavBar/NavBar';
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Double Double Website",
    description: "Home of the Double Double Podcast",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <header>
                    <NavBar />
                </header>
                <div className="bg-gradient-to-b from-[#4287f5] to-[#0f4191]" >
                    {children}
                </div>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
