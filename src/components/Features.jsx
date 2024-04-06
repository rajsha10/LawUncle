import styled, { createGlobalStyle } from "styled-components";
import FeaturePie from "../miniComponents/FeaturePie";
const Features = (props) => {
    return(<>
        <FeatureArea>
            <h1>FEATURES</h1>
            <FeaturePie imgAdd='/images/law.jpg' text='Feature1' />
            <FeaturePie imgAdd='/images/law.jpg' text='Feature1' />
            <FeaturePie imgAdd='/images/law.jpg' text='Feature1' />
            <FeaturePie imgAdd='/images/law.jpg' text='Feature1' />
            <FeaturePie imgAdd='/images/law.jpg' text='Feature1' />
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

    h1{
        margin-top: 3rem;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 4rem;
        font-weight: 700;
        text-align: center;
    }


`;

export default Features;