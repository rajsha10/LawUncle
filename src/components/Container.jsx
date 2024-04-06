import styled, { createGlobalStyle } from "styled-components";
import FontspringDEMOBiennaleBold from "/fonts/Fontspring-DEMO-biennale-bold.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Fontspring DEMO Biennale Bold';
    src: url(${FontspringDEMOBiennaleBold}) format('opentype');
  }
`;
const Container = (props) => {
    return(<>
        <Heading>
          <h1>Law Uncle</h1>
          <p>Lorem ipsum dolor sit, amet 
          consectetur adipisicing elit. Hic, itaque.</p>
          <button>Download our app</button>
        </Heading>
    </>);
};

const Heading = styled.div`
    font-family: 'Fontspring DEMO Biennale Bold';
    width: 100%;
    height: 80vh;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    margin-top: 15rem;
    
    h1{
      font-size: 15rem;
      letter-spacing: 50px;
      text-align: center;
      text-shadow: 0 5px 10px rgba(0,0,0,1);
    }
    
    p{
      text-align: center;
      width: 100%;
      font-size: 2rem;
      margin-top: 0;
      text-shadow: 0 0 10px rgba(0,0,0,1);
    }
    
    button{
      background-color: transparent;
      color: white;
      border: 3px solid #fff;
      padding: 10px 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.8);
      opacity: 0.8;
      cursor: pointer;
      transition: all 0.17s ease;

      &:hover{
        scale: 1.02;
        opacity: 1;
      }
    }
`;

export default Container;