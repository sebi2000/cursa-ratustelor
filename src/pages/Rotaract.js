import React from "react";
import Hero from "../components/Hero";
import { SliderDataTwo } from "../data/SliderData";
import InfoSection2 from "../components/InfoSection2";
import { InfoDataThree } from "../data/InfoData";
import PersonCard from "../components/ProfileCard";
import Swipper from "../components/Swiper";
import Denisa from "../images/Denisa.jpg";
import Sebi from "../images/Sebi.jpeg";
import Farcas from "../images/Farcas.jpg";
import Marina from "../images/Marina.jpeg"
import Nico from "../images/Nico.jpeg"
import Octa from "../images/Octa.jpeg"
import Radu from "../images/Radu.jpeg"
import Stefan from "../images/Stefan.jpg"
import Bogdan from "../images/Bogdan.jpeg"
import Anda from "../images/Anda.jpg"
import Alexandra from "../images/Alexandra.jpeg"
import Adi from "../images/Adi.jpeg"

import Agasi from "../images/PR/AGASI.jpg"
import CMO from "../images/PR/Centrul Medical Orthopedics.jpg"
import CVM from "../images/PR/clear view media logo.jpeg"
import Stars from "../images/PR/Copy of 50 Stars Beauty Studio logo.png"
import Kartoffel from "../images/PR/Kartoffel.jpg"
import Rotary from "../images/PR/RotaryTM-logo.png"
import Tramonto from "../images/PR/Tramonto Cabin.jpg"
import WCR from "../images/PR/WCR Logo 2020 Vectorial.svg"
import buritto from "../images/PR/logo burrito.png"
import Codru from "../images/PR/Codru.png"
import bWines from "../images/PR/BWines.jpg"
import yuhuu from "../images/PR/logo transparent.png"
import porsche from "../images/PR/Porsche Engineering.png"
import CC from "../images/PR/Camelia.png"
import darc from "../images/darc.png"
import iulius from "../images/iulius.png"
import TMA from "../images/TMA_logo negru.png"
import Bastion from "../images/Policlinica Bastion.jpg"
import Bikes from "../images/logoSupreme_v2.png"
import escapeArena from "../images/Logo negru Escape Arena@2x.png"
import andalusia from "../images/Cofetaria Andalusia logo.jpeg"
import amicii from "../images/Amicii.jpg"

import RotaryLogo from "../images/rotaryLogo.jpg";
import RotaractLogo from "../images/rotaract.jpg";
import PrimariaLogo from "../images/primariaLogo.jpg";
import Timisoara from "../images/timisoara2023.jpg";
import RotaractOpera from "../images/RotaractOpera.jpg";
import InteractLogo from "../images/interactLogo.jpg";
import RipensisLogo from "../images/ripensis.jpg";

import Aramic from "../images/aramic.png";
import YuhuLand from "../images/yuhuLand.png";

import BeautyStudio from "../images/beautyStudio.jpg";
import GrafoPrint from "../images/grafo.jpg";

const Rotaract = () => {
  const personCardData = [
    {
      name: "Denisa Stancu",
      position: "Coordonator Proiect",
      img: Denisa,
      alt: "natalia-image",
      redirectFacebook: "https://www.facebook.com/stancu.denisa.921",
      id: 0,
    },
    {
      name: "Anda Trușcă",
      position: "Coordonator Fundraising",
      img: Anda,
      alt: "natalia-image",
      redirectFacebook: "https://www.facebook.com/andrada.trusca",
      id: 0,
    },
    {
      name: "Ștefan Țunea",
      position: "Coordonator Fundraising",
      img: Stefan,
      alt: "natalia-image",
      redirectFacebook: "https://www.facebook.com/stefanm175",
      id: 0,
    },
    {
      name: "Marina Oprean-Lungu",
      position: "Coordonator Fundraising",
      img: Marina,
      alt: "natalia-image",
      redirectFacebook: "https://www.facebook.com/marinaalexandra.lungu",
      id: 0,
    },
    {
      name: "Radu Bîrlan",
      position: "Coordonator Fundraising",
      img: Radu,
      alt: "natalia-image",
      redirectFacebook: "",
      id: 0,
    },
    {
      name: "Flavia Fărcaș",
      position: "Coordonator Logistica",
      img: Farcas,
      alt: "flavia-image",
      redirectFacebook: "https://www.facebook.com/farcas.flaviaa",
      id: 1,
    },
    {
      name: "Nicoleta Moissiu",
      position: "Coordonator Logistica",
      img: Nico,
      alt: "flavia-image",
      redirectFacebook: "https://www.facebook.com/nicoleta.moissiu",
      id: 1,
    },
    {
      name: "Octaviana Darie",
      position: "Coordonator Logistica",
      img: Octa,
      alt: "flavia-image",
      redirectFacebook: "",
      id: 1,
    },
    {
      name: "Adrian Mitruț",
      position: "Coordonator PR",
      img: Adi,
      alt: "flavia-image",
      redirectFacebook: "https://www.facebook.com/mitrut.adrian",
      id: 1,
    },
    {
      name: "Alexandra Vîlcea",
      position: "Coordonator PR",
      img: Alexandra,
      alt: "flavia-image",
      redirectFacebook: "https://www.facebook.com/alevilcea",
      id: 1,
    },
    {
      name: "Bogdan Dobre",
      position: "PR",
      img: Bogdan,
      alt: "flavia-image",
      redirectFacebook: "https://www.facebook.com/dobre.bogdan.503",
      id: 1,
    },
    {
      name: "Sebastian Stoicescu",
      position: "Coordonator IT",
      img: Sebi,
      linkedin: true,
      alt: "marko-image",
      redirectFacebook:
        "https://www.linkedin.com/in/sebastian-gabriel-stoicescu-594452204/",
      id: 3,
    },
  ];

  const swipperDataParteneri = [
    {
      img: InteractLogo,
      alt: "interact",
    },
    {
      img: RotaryLogo,
      alt: "rotary",
    },
    // {
    //   img: RotaractLogo,
    //   alt: "rotaract2",
    // },
    // {
    //   img: PrimariaLogo,
    //   alt: "primaria2",
    // },
    // {
    //   img: Timisoara,
    //   alt: "timisoara",
    // },
    // {
    //   img: RipensisLogo,
    //   alt: "ripensis",
    // },
    {
      img: RotaractLogo,
      alt: "rotaract",
    },
    {
      img: PrimariaLogo,
      alt: "primaria",
    },
    // {
    //   img: RotaractOpera,
    //   alt: "opera",
    // },
  ];

  const swipperDataSponsori = [
    {
      img: Agasi,
      alt: "aramic",
    },
    {
      img: CMO,
      alt: "yuhuLand",
    },
    {
      img: Tramonto,
      alt: "beautyStudio",
    },
    {
      img: Kartoffel,
      alt: "GrafoPrint",
    },
    {
      img: Stars,
      alt: "aramic2",
    },
    {
      img: CVM,
      alt: "yuhuLand2",
    },
    {
      img: Rotary,
      alt: "beautyStudio2",
    },
    {
      img: WCR,
      alt: "GrafoPrint2",
    },
    {
      img: CC,
      alt: "GrafoPrint2",
    },
    {
      img: bWines,
      alt: "GrafoPrint2",
    },
    {
      img: buritto,
      alt: "GrafoPrint2",
    },
    {
      img: Codru,
      alt: "GrafoPrint2",
    },
    {
      img: yuhuu,
      alt: "GrafoPrint2",
    },
    {
      img: porsche,
      alt: "GrafoPrint2",
    },
    {
      img: darc,
      alt: "GrafoPrint2",
    },
    {
      img: iulius,
      alt: "GrafoPrint2",
    },
    {
      img: TMA,
      alt: "GrafoPrint2",
    },
    {
      img: Bastion,
      alt: "GrafoPrint2",
    },
    {
      img: Bikes,
      alt: "GrafoPrint2",
    },
    {
      img: andalusia,
      alt: "GrafoPrint2",
    },
    {
      img: amicii,
      alt: "GrafoPrint2",
    },
    {
      img: escapeArena,
      alt: "GrafoPrint2",
    },
  ];
  return (
    <>
      <Hero slides={SliderDataTwo} />
      <InfoSection2 {...InfoDataThree} />
      <h1 className="heading">Echipă</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {personCardData.map((item) => (
          <PersonCard
            key={item.id}
            name={item.name}
            position={item.position}
            alt={item.alt}
            img={item.img}
            redirectFacebook={item.redirectFacebook}
            linkedin={item.linkedin}
          />
        ))}
      </div>
      <dvi>
        <Swipper swipperData={swipperDataParteneri} title={"Parteneri"} />
      </dvi>
      <dvi>
        <Swipper swipperData={swipperDataSponsori} title={"Sponsori"} />
      </dvi>
    </>
  );
};

export default Rotaract;
