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
        <div className="wrapper">
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
        Q : 'Question 1',
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae dolorum temporibus labore facere quasi aut alias nihil, debitis atque rerum?",
    },
    {
        Q : 'Question 2',
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae dolorum temporibus labore facere quasi aut alias nihil, debitis atque rerum?",
    },
    {
        Q : 'Question 3',
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae dolorum temporibus labore facere quasi aut alias nihil, debitis atque rerum?",
    }
]

export default Accordion;