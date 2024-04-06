import styled, { createGlobalStyle } from "styled-components";
import FontspringDEMOBiennaleBold from "/fonts/Fontspring-DEMO-biennale-bold.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Fontspring DEMO Biennale Bold';
    src: url(${FontspringDEMOBiennaleBold}) format('opentype');
  }
`;

const Feature2 = (props) => {
    return(<>
        <Feature1Area>
            <div className="infocont">
                <h3>Instant 101 Session With Lawyer</h3>
                <p>Works like the canvas tools you’re familiar with.</p>
                <button>Read More</button>
            </div>
            <img src="/images/nothing.png" alt="" />
        </Feature1Area>
    </>);
};

const Feature1Area = styled.div`
    /* background-color: whitesmoke; */
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 5rem;

    .infocont{
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
    }
    
    img{
        width: 40rem;
        border-radius: 2rem;
        box-shadow: 0 0 10px rgba(54, 69, 79, 0.5);
        cursor: pointer;
        transition: all 0.15s ease;

        &:hover{
            scale: 1.02;
        }
    }
    
    h3{
        font-family: 'Fontspring DEMO Biennale Bold';
        font-size: 4rem;
        color: #343434;
        line-height: 4.5rem;
        text-shadow: 0 7px 10px rgba(54, 69, 79, 0.4);
    }
    
    p{
        font-family: 'Fontspring DEMO Biennale Bold';
        font-size: 1.7rem;
        width: 60%;
        color: #36454F;
        text-shadow: 0 7px 10px rgba(54, 69, 79, 0.3);
    }
    
    button{
        font-family: Georgia, 'Times New Roman', Times, serif;
        background-color: #353935;
        color : #fff;
        font-size: 1.7rem;
        padding: 0.8rem 1.7rem;
        border: none;
        border-radius: 0.9rem;
        box-shadow: 0 5px 10px rgba(52, 52, 52, 0.5);
        cursor: pointer;
        transition: all 0.18s ease;

        &:hover{
            scale: 0.98;
        }
        
    }
`;

export default Feature2;