import styled, { createGlobalStyle } from "styled-components";

const AboutImg = ({ imageAdd }) => {
    return(<>
        <InfoCont>
            <img src={imageAdd} alt="About Image" />
        </InfoCont>
    </>);
};

const InfoCont = styled.div`
    width: 20rem;
    height: 30rem;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.6);
    }
`;

export default AboutImg;
