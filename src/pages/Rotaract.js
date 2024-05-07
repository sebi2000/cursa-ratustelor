import React from "react";
import Hero from "../components/Hero";
import { SliderDataTwo } from "../data/SliderData";
import InfoSection2 from "../components/InfoSection2";
import { InfoDataThree } from "../data/InfoData";
import PersonCard from "../components/ProfileCard";
import Swipper from "../components/Swiper";
import Denisa from "../images/Denisa.jpg";
import Sebi from "../images/Sebi.jpg";
import Natalia from "../images/Natalia.jpg";
import Farcas from "../images/Farcas.jpg";
import Marko from "../images/Marko.jpg";

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
      name: "Natalia Mijea",
      position: "Coordonator Proiect",
      img: Natalia,
      alt: "natalia-image",
      redirectFacebook: "https://www.facebook.com/nataliamijea",
      id: 0,
    },
    {
      name: "Natalia Mijea",
      position: "Coordonator Proiect",
      img: Natalia,
      alt: "natalia-image",
      redirectFacebook: "https://www.facebook.com/nataliamijea",
      id: 0,
    },
    {
      name: "Natalia Mijea",
      position: "Coordonator Proiect",
      img: Natalia,
      alt: "natalia-image",
      redirectFacebook: "https://www.facebook.com/nataliamijea",
      id: 0,
    },
    {
      name: "Natalia Mijea",
      position: "Coordonator Proiect",
      img: Natalia,
      alt: "natalia-image",
      redirectFacebook: "https://www.facebook.com/nataliamijea",
      id: 0,
    },
    {
      name: "Natalia Mijea",
      position: "Coordonator Proiect",
      img: Natalia,
      alt: "natalia-image",
      redirectFacebook: "https://www.facebook.com/nataliamijea",
      id: 0,
    },
    {
      name: "Flavia Farcaș",
      position: "Coordonator PR",
      img: Farcas,
      alt: "flavia-image",
      redirectFacebook: "https://www.facebook.com/farcas.flaviaa",
      id: 1,
    },
    {
      name: "Denisa Stancu",
      position: "Coordonator Logistica",
      img: Denisa,
      alt: "denisa-image",
      redirectFacebook: "https://www.facebook.com/stancu.denisa.921",
      id: 2,
    },
    {
      name: "Sebastian Ștefănigă",
      position: "Coordonator Fundraising",
      img: Sebi,
      alt: "Sebastian-image",
      linkedin: true,
      redirectFacebook: "https://www.linkedin.com/in/sebastianstefaniga/",
      id: 3,
    },
    {
      name: "Marko Cîmpan",
      position: "Coordonator IT",
      img: Marko,
      linkedin: true,
      alt: "marko-image",
      redirectFacebook:
        "https://www.linkedin.com/in/marko-c%C3%AEmpan-9380b418a/",
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
    {
      img: RotaractLogo,
      alt: "rotaract2",
    },
    {
      img: PrimariaLogo,
      alt: "primaria2",
    },
    {
      img: Timisoara,
      alt: "timisoara",
    },
    {
      img: RipensisLogo,
      alt: "ripensis",
    },
    {
      img: RotaractLogo,
      alt: "rotaract",
    },
    {
      img: PrimariaLogo,
      alt: "primaria",
    },
    {
      img: RotaractOpera,
      alt: "opera",
    },
  ];

  const swipperDataSponsori = [
    {
      img: Aramic,
      alt: "aramic",
    },
    {
      img: YuhuLand,
      alt: "yuhuLand",
    },
    {
      img: BeautyStudio,
      alt: "beautyStudio",
    },
    {
      img: GrafoPrint,
      alt: "GrafoPrint",
    },
    {
      img: Aramic,
      alt: "aramic2",
    },
    {
      img: YuhuLand,
      alt: "yuhuLand2",
    },
    {
      img: BeautyStudio,
      alt: "beautyStudio2",
    },
    {
      img: GrafoPrint,
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
