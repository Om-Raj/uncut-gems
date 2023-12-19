import dividerPattern from "./assets/images/pattern-divider-desktop.svg"
import diceIcon from "./assets/images/icon-dice.svg"
import { useState, useEffect } from "react"

const AdviceSlip = () => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [slip, setSlip] = useState(null);
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('i fire once');
        fetch("https://api.adviceslip.com/advice")
            .then((response) => {
                if (!response.ok) {
                    throw Error("Couldn't fetch the advice.")
                }
                return response.json();
            })
            .then((data) => {
                setSlip(data.slip);
                setIsPending(false);
            })
            .catch((e) => {
                setError(e);
                setIsPending(false);
            })
    }, [count]);

    return ( 
        <div className="card">
            { isPending && <div className="loading">Getting advice for you...</div> }
            { error && <div className="error">{ error.message }</div> }
            { !isPending && !error && 
            <div>
                <div className="advice-id">ADVICE #{ slip.id }</div>
                <div className="advice-text">“{ slip.advice }”</div>
            </div> }
                <img className="divider" src={dividerPattern} alt="Divider Pattern" />
                <button className="dice" onClick={() => setCount(count+1)}>
                    <img src={diceIcon} alt="Dice icon" />
                </button>
        </div>
    );
}
 
export default AdviceSlip;