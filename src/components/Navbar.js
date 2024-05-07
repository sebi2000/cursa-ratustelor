import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import Bars from "../images/bars2.svg";
import logoRata from "../images/logoRata.png";

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  color: #faa71e;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" ? "white" : "transparent",
    boxShadow:
      navbar || location.pathname !== "/"
        ? "rgba(250, 167, 30, 1) 0px 7px 29px 0px"
        : "",
    transition: "0.4s",
  };

  return (
    <Nav style={style}>
      <Logo to="/">
        <img
          src={logoRata}
          style={{ objectFit: "contain", width: "90px", height: "50px" }}
          alt="logoRata"
        ></img>
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={{
            pathname: item.link,
          }}
          target={item.title === 'Înscrie-te' ? "_blank" : null}
          primary="true"
          key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button
          to={{
            pathname: "https://www.facebook.com/RotaractClubTimisoara",
          }}
          target="_blank"
          primary="true"
        >
          Facebook
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
