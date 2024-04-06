import styled, { createGlobalStyle } from "styled-components";
import FontspringDEMOBiennaleMedium from "/fonts/Fontspring-DEMO-biennale-medium.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Fontspring DEMO Biennale Medium';
    src: url(${FontspringDEMOBiennaleMedium}) format('opentype');
  }
`;

const Scan = (prosp) => {
    return(<>
        <ScanArea>
            <h1>Scan QR and Connect</h1>
            <img src="/images/QR.png" alt="QR" />
        </ScanArea>
    </>)
}

const ScanArea = styled.div`
    background-color: #f0ebe1;
    width: 100%;
    height: 30rem;
    display:flex;
    align-items: center;
    justify-content: space-evenly;

    h1{
        font-family: 'Fontspring DEMO Biennale Medium';
        font-weight: 600;
        font-size: 4.2rem;
        color: #000000;
        text-shadow: 0 5px 10px rgba(0,0,0,0.3);
    }

    img{
        border: solid 2px black;
        width: 25rem;
        height: 25rem;
        border-radius: 2rem;
        object-fit: cover;
        object-position: top;
        box-shadow: 0 2px 10px rgba(0,0,0,0.4);
    }

`;

export default Scan;