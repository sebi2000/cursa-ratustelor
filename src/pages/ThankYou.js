import React from "react";
import styled from "styled-components";

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

const ThankYou = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <h1 style={{ textAlign: "center" }}>
            Vă mulțumim pentru donație Vă rugăm să vă verificați adresa de email
            pentru biletul/biletele de participare la cursă! Vă așteptăm pe data
            de 19.09.2021!
          </h1>
        </Wrap>
      </Container>
    </Section>
  );
};

export default ThankYou;
