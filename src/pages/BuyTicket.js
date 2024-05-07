import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from '../components/Button'

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

const BuyTicket = () => {

  return (
    <Section>
      <Container>
        <Wrap>
            <Button
              to={{
                pathname: "https://buy.stripe.com/6oE29482t42ocww6oo",
              }}
              target="_blank"
              primary="true"
              >
              Cumpără bilet
            </Button>
        </Wrap>
      </Container>
    </Section>
  );
};

export default BuyTicket;
