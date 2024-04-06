import styled, { createGlobalStyle } from "styled-components";
import Feature1 from "../miniComponents/Feature1";
import Feature2 from "../miniComponents/Feature2";

const Features = (props) => {
    return(<>
        <FeatureArea>
            <h1>FEATURES</h1>
            <Feature1 />
            <Feature2 />
        </FeatureArea>

    </>)
};

const FeatureArea = styled.div`
    width: 100%;
    height: 90vh;
    background-color: #f8eeec;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h1{
        color: #000000;
        margin-top: 3rem;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 4rem;
        font-weight: 700;
        text-align: center;
        text-shadow: 0 7px 10px rgba(0,0,0,0.3);
    }


`;

export default Features;