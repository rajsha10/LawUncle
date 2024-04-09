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
        <Heading className="heading" id="scollhome">
          <div className="logorea">
            <h1>Law Uncle</h1>
              <p>Justice Delayed is Justice Denied</p>
              
              <a href="#">
              <button>Download our app</button>
              </a>
          </div>
        </Heading>
    </>);
};

const Heading = styled.div`
    font-family: 'Fontspring DEMO Biennale Bold';
    width: 100%;
    height: 100vh;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;

    .logorea{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
    
    h1{
      color: #fff;
      font-size: 15rem;
      letter-spacing: 40px;
      text-align: center;
      text-shadow: 0 5px 10px rgba(0,0,0,1);
    }
    
    p{
      text-align: center;
      color: #fff;
      width: 100%;
      font-size: 3.5rem;
      margin-top: 0;
      text-shadow: 0 0 10px rgba(0,0,0,1);
    }
    
    button{
      background-color: transparent;
      color: green;
      border: 3px solid green;
      padding: 10px 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.8);
      opacity: 0.8;
      cursor: pointer;
      transition: all 0.17s ease;
      margin-top: 2rem;

      &:hover{
        scale: 1.02;
        opacity: 1;
      }
    }

    @media screen and (max-width: 500px) {
      height: 100vh;
      gap: 20px;
      h1{
        font-size: 5rem;
        letter-spacing: 5px;
      }

      p{
        font-size: 1.8rem;
        line-height: 0px;
      }
    }
`;

export default Container;