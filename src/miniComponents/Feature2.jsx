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
                <p>Instant Lawyer Consultation" allows users to quickly 
                connect with a lawyer for immediate legal advice and guidance.</p>
                <button>Read More</button>
            </div>
            <img src="/images/f2.png" alt="" />
        </Feature1Area>
    </>);
};

const Feature1Area = styled.div`
    /* background-color: whitesmoke; */
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 5rem;
    margin-bottom: 4rem;

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
        box-shadow: 0 0 10px rgba(255,255,255, 0.5);
        cursor: pointer;
        transition: all 0.15s ease;

        &:hover{
            scale: 1.02;
        }
    }
    
    h3{
        font-family: 'Fontspring DEMO Biennale Bold';
        font-size: 4rem;
        color: #fff;
        text-shadow: 0 7px 10px rgba(255,255,255, 0.4);
    }
    
    p{
        font-family: 'Fontspring DEMO Biennale Bold';
        font-size: 1.7rem;
        width: 100%;
        color: #fff;
        text-shadow: 0 7px 10px rgba(255,255,255, 0.3);
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

    @media screen and (max-width: 500px) {
        height: auto;
        margin-top: 3rem;

        .infocont{
            height: auto;
            width: auto;
            margin-left: 2rem;
        }
        
        img{
            width: 15rem;
            margin-right: 2rem;
        }

        h3{
            font-size: 1.5rem;
        }

        p{
            font-size: 1.2rem;
            width: 100%;
        }

        button{
            font-size: 1rem;
            padding: 0.4rem 1rem;           
        }
    }
`;

export default Feature2;