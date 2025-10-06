import React from "react";
import DoubleDoubleTitle from "../Helpers/DoubleDoubleTitle/DoubleDoubleTitle";
import Socials from "../Helpers/Socials/Socials";
import EpisodeNode from '@/components/Home/EpisodeNode/EpisodeNode';
import AboutUs from '@/components/Home/AboutUs/AboutUs';
import FeaturedEpisode from '@/components/Home/FeaturedEpisode/FeaturedEpisode';
import { testEpisode, featuredEpisode } from '@/data/episodes'

export default function Home() {
  return (
    <>
      <DoubleDoubleTitle />
      <Socials />
      <AboutUs />
      <div className="px-12 py-2">
        <h1 className="text-3xl font-bold">Latest Episode</h1>
      </div>
      <EpisodeNode episode={testEpisode} />
      
      {/* Separator */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative flex items-center">
          <div className="flex-grow border-t-2 border-blue-400/50"></div>
          <span className="flex-shrink mx-4 text-blue-400 font-bold text-lg">★</span>
          <div className="flex-grow border-t-2 border-blue-400/50"></div>
        </div>
      </div>

      <div className="px-12 py-2">
        <h1 className="text-3xl font-bold">Featured Episode</h1>
      </div>
      <FeaturedEpisode episode={featuredEpisode} />
    </>
  );
}
