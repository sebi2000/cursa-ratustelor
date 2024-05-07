import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: white;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
  delay,
  showButton,
  showButton2,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft
          reverse={reverse}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay={delay}
          data-aos-anchor-placement="center bottom"
        >
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          {showButton && (
            <Button
              to={{
                pathname: `https://www.facebook.com/RotaractClubTimisoara`,
              }}
              target="_blank"
              primary="true"
            >
              {"Accesează Facebook"}
            </Button>
          )}
          {showButton2 && (
            <Button
              to={{
                pathname: `https://www.instagram.com/rotaractclubtimisoara/`,
              }}
              target="_blank"
              primary="true"
              style={{ marginTop: "10px" }}
            >
              {"Accesează Instagram"}
            </Button>
          )}
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img
            src={image}
            alt="home"
            style={{ objectFit: "contain", width: "100%", marginTop: "120px" }}
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay={delay}
            data-aos-anchor-placement="center bottom"
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
