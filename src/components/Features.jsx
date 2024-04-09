import styled, { createGlobalStyle } from "styled-components";
import Feature1 from "../miniComponents/Feature1";
import Feature2 from "../miniComponents/Feature2";

const Features = (props) => {
    return(<>
        <FeatureArea className="featureArea" id="scollFeatures">
            <h1>FEATURES</h1>
            <Feature1 />
            <Feature2 />
        </FeatureArea>

    </>)
};

const FeatureArea = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: #f8eeec; */
    background: url('/images/background.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h1{
        color: #ffffff;
        margin-top: 8rem;
        margin-bottom: 5rem;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 4rem;
        font-weight: 700;
        text-align: center;
        text-shadow: 0 7px 10px rgba(255,255,255,0.3);
    }

    @media screen and (max-width: 500px) {
        height: auto;

        h1{
            margin-top: 1rem;
            font-size: 3rem;
        }
    }

`;

export default Features;