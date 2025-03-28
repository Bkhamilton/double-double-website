import React from "react";
import DoubleDoubleTitle from "../Helpers/DoubleDoubleTitle/DoubleDoubleTitle";
import Socials from "../Helpers/Socials/Socials";
import EpisodeNode from '@/components/Home/EpisodeNode/EpisodeNode';
import AboutUs from '@/components/Home/AboutUs/AboutUs';
import { testEpisode } from '@/data/episodes'

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
    </>
  );
}
