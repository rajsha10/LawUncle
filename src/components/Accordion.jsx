import '../assets/Accordion.css';
import { useState } from 'react';

const Accordion = (props) => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected == i){
            return setSelected(null);
        }

        setSelected(i);
    }

    return(<>
        <div className="wrapper" id='scollFAQ'>
            <h1>FAQ</h1>
            <div className="accordion">
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <h2>{item.Q}</h2>
                            <span>{selected == i ? '-' : '+'}</span>
                        </div>
                        <div className={selected == i ? 'content.show' : 'content'}>
                            <p>{item.answer}</p>
                        </div>
                    </div>    
                ))}
            </div>
        </div>
    </>)
}

const data = [
    {
        Q : 'What is Law Uncle?',
        answer: "Law Uncle is web3 app to provide quick guide and consultancy using AI and 101 sessions with Lawyers",
    },
    {
        Q : 'How are we integrating web3 into Lawuncle?',
        answer: "We integrate web3 into LawUncle through the Octo Wallet.",
    },
    {
        Q : 'What we get in Law Uncle',
        answer: "Get round-the-clock legal support from lawyers or AI chat through our app, ensuring you have expert assistance whenever you need it.",
    }
]

export default Accordion;