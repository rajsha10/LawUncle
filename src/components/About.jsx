import styled, { createGlobalStyle } from "styled-components";
import AboutImg from "../miniComponents/AboutImg";

const About = (props) => {
    return(<>
        <AboutArea className="aboutArea">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit, minus nesciunt consequuntur id quia soluta temporibus repudiandae quos perferendis numquam tempora sed nihil ducimus eveniet distinctio quasi odit quisquam inventore non sint facilis veritatis. 
            Expedita error repellendus doloremque vero?</p>
        
        <ImgCont>
            <AboutImg imageAdd='/images/law.jpg' />
            <AboutImg imageAdd='/images/law.jpg' />
            <AboutImg imageAdd='/images/law.jpg' />
        </ImgCont>
        
        </AboutArea>

    </>)

};

const AboutArea = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #28282B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #ffffff;

    h1{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 4rem;
        font-weight: 700;
        text-align: center;
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
        margin-top: 3rem;
    }
`;

export default About;