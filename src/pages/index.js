import React from "react";
import ReactPlayer from "react-player/lazy";
import Features from "../components/Features";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Listings from "../components/Listings";
import {
  InfoData,
  InfoDataDate,
  InfoDataParticipation,
  InfoDataTwo,
} from "../data/InfoData";
import { SliderData } from "../data/SliderData";

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <div
        style={{ width: "100%", height: "150px", backgroundColor: "#ffce2d" }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}

      >
        <ReactPlayer
          url="https://youtu.be/OqCREj40Z00"
          controls={true}
        />
      </div>
      <Features />
      <InfoSection {...InfoDataTwo} />
      <div
        style={{ width: "100%", height: "150px", backgroundColor: "#ffce2d" }}
      ></div>
      <Listings />

      <div
        style={{ width: "100%", height: "150px", backgroundColor: "#ffce2d" }}
      ></div>
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataParticipation} />
      <InfoSection {...InfoDataDate} />
    </>
  );
};

export default Home;
