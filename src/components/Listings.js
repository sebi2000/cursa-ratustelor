import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import HomeOne from "../images/cursa-2.jpg";
import HomeThree from "../images/cursa-barca.jpg";

import HomeTwo from "../images/cursa-pod.jpg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  max-height: 320px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  width: 140px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`;

const Listings = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            Evenimente trecute
          </h1>
        </Heading>
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image src={HomeOne} alt="home" />
            <h2>Cursa 2015</h2>
            <InfoLink
              to={{
                pathname: `https://www.youtube.com/watch?v=Xf0LRWKt_VA&ab_channel=CasadeCultur%C4%83aMunicipiuluiTimi%C8%99oara`,
              }}
              target="_blank"
            >
              <p>Vezi Video</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image src={HomeThree} alt="home" />
            <h2>Cursa 2016</h2>
            <InfoLink
              to={{
                pathname: `https://www.youtube.com/watch?v=BozOFuuWx0E&t=70s&ab_channel=CasadeCultur%C4%83aMunicipiuluiTimi%C8%99oara`,
              }}
              target="_blank"
            >
              <p>Vezi Video</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src={HomeTwo}
              alt="home"
              css={`
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>Cursa 2019</h2>
            <InfoLink
              to={{
                pathname: `https://www.youtube.com/watch?v=nhB1kBskbLM&ab_channel=BanatulAzi`,
              }}
              target="_blank"
            >
              <p>Vezi video</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Listings;
