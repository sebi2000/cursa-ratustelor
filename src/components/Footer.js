import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: red;
    text-decoration: underline;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Section = styled.section`
  background: #faa71e;
  color: #fff;
  width: 100%;
  min-height: 600px;
  padding: 3rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4rem 0rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Quote = styled.div`
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: clamp(2rem, 8vw, 5rem);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #cd853f;
`;

const Instagram = styled(FaInstagram)`
  ${Icons}
`;

const Facebook = styled(FaFacebookF)`
  ${Icons}
`;

const Youtube = styled(FaYoutube)`
  ${Icons}
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h3 style={{ textAlign: "center" }}>
              Cursa Rățuștelor <br /> 1 iunie 2024
            </h3>
          </Quote>
          <div
            style={{
              display: "flex",
              marginTop: "15px",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "space-between",
              padding: "40px 0",
            }}
          >
            <CustomLink
              to="/politica-de-confidentialitate"
              style={{
                marginBottom: "15px",
              }}
            >
              Politica de Confidențialitate
            </CustomLink>

            <CustomLink
              to="/termeni-si-conditii"
              style={{ marginRight: "30px" }}
              target="_blank"
            >
              Termeni si conditii
            </CustomLink>
          </div>
        </FooterTop>
        <FooterBottom>
          <SocialIcons>
            <a
              href="https://www.youtube.com/results?search_query=cursa+ratustelor+pe+bega"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Youtube />
            </a>
            <a
              href="https://www.instagram.com/rotaractclubtimisoara/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/RotaractClubTimisoara"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
          </SocialIcons>
          {/* <Contact>
            <Button to="/homes">
              Let's Chat <IoMdArrowRoundForward />
            </Button>
          </Contact> */}
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
