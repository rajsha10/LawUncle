import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FontspringDEMOBiennaleBold from "/fonts/Fontspring-DEMO-biennale-bold.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Fontspring DEMO Biennale Bold';
    src: url(${FontspringDEMOBiennaleBold}) format('opentype');
  }
  h1, li {
    cursor: pointer;
    transition: all 0.18s ease;
  }
`;

const Nav = styled.nav`
    position: fixed;
    z-index: 9999;
    top: 0;
    width: 100%;
    background-color: ${props => props.backgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    transition: background-color 0.3s ease;

    &.scrolled {
        background-color: #000000;
        box-shadow: 0 10px 10px rgba(0,0,0,0.5);
    }

    .hamburgerMenu{
        display: none;
    }
`;

const Header = (props) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const backgroundColor = scrolled ? "#000000" : "transparent";

    return (
        <>
            <GlobalStyle />
            <Nav backgroundColor={backgroundColor} className={scrolled ? "scrolled" : ""}>
                <Logo>
                    {/* <h1>Law Uncle</h1> */}
                    <img src="/images/LawUncle2.png" alt="" className="logo" />
                </Logo>
                <Menu className="menuNames">
                    <ul>
                        <li>Home</li>
                        <li>Download App &darr;</li>
                        <li>About Us</li>
                        <li>Features</li>
                        <li>FAQs</li>
                    </ul>
                </Menu>
                <HelpCont>Help&#63;</HelpCont>
            </Nav>
        </>
    );
};

const Logo = styled.div`

    h1{
        font-family: 'Fontspring DEMO Biennale Bold'; 
        color: #ffffff;
        font-size: 4.2rem;
        text-shadow: 0 5px 10px rgba(255,255,255,0.3);
    }

    .logo{
        width: 10rem;
        height: auto;
        object-fit: cover;
    }
`;

const Menu = styled.div`

    width: 50%;

    ul{
        list-style: none;
        text-decoration: none;
        font-family: 'Fontspring DEMO Biennale Bold'; 
        font-size: 1.6rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    li{
        color: #ffffff;
    }

    li:hover{
        text-decoration: underline;
    }
`;

const HelpCont = styled.button`
    font-family: sans-serif;
    color: #ffffff;
    background: transparent;
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 1rem 3rem;
    box-shadow: 0 5px 10px rgba(255,255,255,0.2);
    cursor: pointer;
    transition: all 0.18s ease;

    &:hover{
        box-shadow: 0 5px 10px rgba(255,255,255,0.4);
    }
`;


export default Header;