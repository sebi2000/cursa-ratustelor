import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  background-color: #faa71e;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 35px;
  max-width: 250px;
  margin: 30px;
  @media screen and (max-width: 768px) {
    max-width: 145px;
    margin: 15px;
    padding: 15px;
    border-radius: 15px;
  }
`;

const CardImage = styled.img`
  height: 9rem;
  width: 9rem;
  border-radius: 50%;
  object-fit: contain;
  @media screen and (max-width: 768px) {
    height: 5rem;
    width: 5rem;
  }
`;

const CardName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 2rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    font-weight: bold;
    margin-top: 1rem;
  }
`;

const PersonPosition = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    font-weight: bold;
    margin-top: 0.2rem;
  }
`;

const Button = styled(Link)`
  margin-top: 3rem;
  padding: 1.2rem 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &.draw-border {
    background: transparent;
    color: white;
    border: 3px solid white;
    &:hover {
      background-color: white;
      color: #222831;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    padding: 0.8rem 1.2rem;
    font-size: 0.7rem;
    font-weight: bold;
  }
`;

const PersonCard = ({
  name,
  position,
  img,
  alt,
  redirectFacebook,
  linkedin,
}) => {
  return (
    <Card>
      <CardImage src={img} alt={alt} />
      <CardName>{name}</CardName>
      <PersonPosition>{position}</PersonPosition>

      <Button
        className="draw-border"
        to={{
          pathname: redirectFacebook,
        }}
        target="_blank"
      >
        {linkedin ? "Linkedin" : "Facebook"}
      </Button>
    </Card>
  );
};

export default PersonCard;
