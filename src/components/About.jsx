import styled, { createGlobalStyle } from "styled-components";
import AboutImg from "../miniComponents/AboutImg";

const About = (props) => {
    return(<>
        <AboutArea className="aboutArea">
            <h1>About Us</h1>
            <p>We struggle to defend ourselves due to a lack of understanding of our rights and the fear it instills.</p>
        
        <ImgCont>
            <AboutImg imageAdd='/images/screen3.png' />
            <AboutImg imageAdd='/images/screen2.png' />
            <AboutImg imageAdd='/images/screen1.png' />
        </ImgCont>
        
        </AboutArea>

    </>)

};

const AboutArea = styled.div`
    width: 100%;
    height: 80vh;
    /* background-color: #f8eeec; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #ffffff;
    padding-bottom: 5rem;

    h1{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 4rem;
        font-weight: 700;
        text-align: center;
        color: #000000;
    }
    
    p{
        font-family: sans-serif;
        font-size: 2rem;
        padding: 0 4rem;
        text-align: center;
        width: 50%
    }

    @media screen and (max-width: 500px) {
        height: auto;
        padding-bottom: 5rem;
        h1{
            font-size: 3rem;
        }

        p{
            font-size: 1.5rem;
            padding: 0 2rem;
            width: 90%
        }
    }
`;

const ImgCont = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        gap: 2rem;
        margin-top: 2rem;
    }
`;

export default About;