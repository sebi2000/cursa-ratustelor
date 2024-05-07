import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

import PosterRatusca from "../images/cursaBanner.jpg";

const Section = styled.section`
  background: #ffce2d;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 100%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Features = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <h1>Fă o faptă bună și donează!</h1>
              <p>
                Înscrie-te și tu la Cursa Rățuștelor, eveniment organizat de
                către Rotaract Club Timișoara, adoptând una sau mai multe
                rățuște care să participe pentru tine în concurs.
              </p>
              <p>
                Tema ediției din anul 2024 a Cursei Rățuștelor pe Bega este
                reprezentată de sănătate. De aceea am ales ca toate fondurile stranse
                 in urma acestui proiect sa se indrepte spre achizitionarea unui tonometru
                  ocular de ultima generatie care va fi utilizat in consultarea elevilor din mediul rural 
                  din judetul Timis, iar in functie de nevoie vom achizitiona ochelari de vedere pentru acesti elevi.
              </p>
              <Button to={{
                  pathname: "https://buy.stripe.com/6oE00WciJ56s9kk3cd",
                  }}
                  target="_blank"
                  primary="true">
                Înscrie-te
              </Button>
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={PosterRatusca}
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Features;
