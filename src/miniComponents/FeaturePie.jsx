import styled, { createGlobalStyle } from "styled-components";

const FeaturePie = ({ imgAdd, text }) => {
    return(<>
        <InfoArea>
            <img src={ imgAdd } alt="IMG" />
            <h3>{text}</h3>
        </InfoArea>
    </>)
};

const InfoArea = styled.div`
    background-color: #36454F;
    width: 50rem;
    height: 15rem;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    gap: 4rem;

    img{
        width: 30%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
    
    h3{
        font-size: 2rem;
        color: #ffffff;
        font-family: sans-serif;
    }

`;

export default FeaturePie;