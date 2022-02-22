import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo_img from "../../../imgs/footer_logo.png";
import logo_6 from "../../../imgs/logo_NoFrame.jpg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";

const Nav = styled.nav`
  min-height: 9vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  height: 45px;
  width: 45px;
  margin-left: 50px;
`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
  width: inherit;
  justify-content: center;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarLinks = styled.li`
  padding: 0 3% 0 3%;
`;

const StyledLink = styled.a`
  color: black;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  background-image: linear-gradient(rgb(211, 199, 199), rgb(211, 199, 199));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;
  :hover {
    cursor: pointer;
    background-size: 100% 3px;
  }
`;

const StyledLink1 = styled.a`
  color: #ffff;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  background-image: linear-gradient(rgb(211, 199, 199), rgb(211, 199, 199));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;
  :hover {
    cursor: pointer;
    background-size: 100% 3px;
  }
`;

const NavIcon = styled.button`
  background: rgb(211, 199, 199);
  cursor: pointer;
  border: none;
  outline: none;
  margin-right: 1%;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background: white;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${({ toggle }) => (toggle ? "70%" : "40%")};
  }
`;

const Overlay = styled.div`
  height: ${({ toggle }) => (toggle ? "0" : "100vh")};
  position: fixed;
  display: flex;
  width: 36vw;
  right: 0;
  top: 9vh;
  background: #fff;
  box-shadow: ${({ toggle }) => (toggle ? "0" : "8px 0px 5px 9px grey")};
  transition: height 0.4s linear;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  width: inherit;
  left: 50%;
  top: 45%;
  display: ${({ toggle }) => (toggle ? "none" : "")};
  transform: translate(-50%, -50%);

  li {
    opacity: ${({ toggle }) => (toggle ? 0 : 1)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

function Menu() {
  const [toggle, setToggle] = useState(false);
  // const onClick = e => {
  //   e.preventDefault();
  //   setToggle(!false);
  // };

  /*=====================+
 |LANGUAGES TRANSLATION|
 +=====================*/
  const languages = [
    {
      code: "en",
      country_code: "gb",
    },
    {
      code: "gr",
      country_code: "gr",
    },
  ];

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    // document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("appTitle");
  }, [currentLanguage, t]);

  return (
    <>
      <Nav>
        <a href="/">
          <Logo src={logo_img} alt="logo" />
        </a>
        <img src={logo_6} alt="eskinous logo" className="menu__navbar_logo1" />
        <Navbar>
          <NavbarLinks>
            <StyledLink href="/">Home</StyledLink>
          </NavbarLinks>
          <NavbarLinks>
            <StyledLink href="/signUp">Sign-Up</StyledLink>
          </NavbarLinks>
          <NavbarLinks>
            <StyledLink href="/login">Sign-In</StyledLink>
          </NavbarLinks>
          <NavbarLinks>
            <StyledLink href="/about">About us</StyledLink>
          </NavbarLinks>
          <div className="language-select">
            <div className="">
              <div className="dropdown">
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {languages.map(({ code, name, country_code }) => (
                    <li key={country_code}>
                      <a
                        href="#"
                        className={classNames("dropdown-item", {
                          disabled: currentLanguageCode === code,
                        })}
                        onClick={() => {
                          i18next.changeLanguage(code);
                        }}
                      >
                        <span
                          className={`flag-icon flag-icon-${country_code} mx-2`}
                          style={{
                            opacity: currentLanguageCode === code ? 0.7 : 1,
                          }}
                        ></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Navbar>
        <NavIcon onClick={() => setToggle(!toggle)}>
          <Line toggle={!toggle} />
          <Line toggle={!toggle} />
          <Line toggle={!toggle} />
        </NavIcon>
      </Nav>
      <div
        className={
          toggle
            ? "menu-dropdown-container"
            : "menu-dropdown-container-inactive"
        }
      >
        <div className="menu-dropdown-opts-cont">
          {" "}
          <NavbarLinks>
            <StyledLink1 href="/">Home</StyledLink1>
          </NavbarLinks>
          <NavbarLinks>
            <StyledLink1 href="/signUp">Sign-Up</StyledLink1>
          </NavbarLinks>
          <NavbarLinks>
            <StyledLink1 href="/login">Sign-In</StyledLink1>
          </NavbarLinks>
          <NavbarLinks>
            <StyledLink1 href="#TemplatesFooterId">About us</StyledLink1>
          </NavbarLinks>
          <div className="language-select">
            <div className="">
              <div className="dropdown">
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {languages.map(({ code, country_code }) => (
                    <li key={country_code}>
                      <a
                        href="#"
                        className={classNames("dropdown-item", {
                          disabled: currentLanguageCode === code,
                        })}
                        onClick={() => {
                          i18next.changeLanguage(code);
                        }}
                      >
                        <span
                          className={`flag-icon flag-icon-${country_code} mx-2`}
                          style={{
                            opacity: currentLanguageCode === code ? 0.7 : 1,
                          }}
                        ></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
export default Menu;
