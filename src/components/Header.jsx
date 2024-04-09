import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link as LinkScroll} from "react-scroll";
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
    height: 8rem;
    background-color: ${props => props.backgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    transition: background-color 0.3s ease;

    &.scrolled {
        background-color: #161635;
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

    const backgroundColor = scrolled ? "#161635" : "transparent";

    const [click, setClick] = useState(true);

    return (
        <>
            <GlobalStyle />
            <Nav backgroundColor={backgroundColor} className={scrolled ? "scrolled" : ""}>
                <Logo>
                    {/* <h1>Law Uncle</h1> */}
                    <img src="/images/LawUncle2.png" alt="" className="logo" />
                </Logo>
                <Menu>
                    {/* Hamburger menu  */}
                    <div className="hamburgerMenu">
                            <a href="#">
                                <img src="/images/menu.png" alt="burger" className="burgerMenu" />
                            </a>
                    </div>
                    <div className="menuNames">
                        {
                            click && 
                                <ul>
                                    <li><LinkScroll activeClass="active" to="scollhome" spy={true} smooth={true} offset={0} duration={500}>Home</LinkScroll></li>
                                    <li><a href="#">Download App &darr;</a></li>
                                    <li><LinkScroll activeClass="active" to="scollAbout" spy={true} smooth={true} offset={0} duration={500}>About</LinkScroll></li>
                                    <li><LinkScroll activeClass="active" to="scollFeatures" spy={true} smooth={true} offset={0} duration={500}>Features</LinkScroll></li>
                                    <li><LinkScroll activeClass="active" to="scollFAQ" spy={true} smooth={true} offset={0} duration={500}>FAQ</LinkScroll></li>
                                </ul>
                            
                        }   
                    </div>
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
    a,li{
        text-decoration: none;
        color: #ffffff;
    }

    li:hover{
        text-decoration: underline;
    }

    .hamburgerMenu{
        display: none;
    }

    

    @media screen and (max-width: 500px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .hamburgerMenu{
            display: block;
        }
        .burgerMenu{
            width: 3rem;
        }
        .menuNames{
            width: 100%;
            transition : all 0.2s ease;
            /* display: none; */
        }
        .menuNames ul{
            flex-direction: column;
            align-items: flex-end;
            gap: 1rem;
            position: absolute;
            right: 0;
            top: 7rem;
            background-color: #161635;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: -5px 5px 20px rgba(0,0,0,0.3) ;
        }
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

    @media screen and (max-width: 500px) {
        display: none;
    }
`;


export default Header;