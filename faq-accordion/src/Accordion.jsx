/* eslint-disable react/prop-types */
import "./Accordian.css"
import iconStar from "./assets/images/icon-star.svg"
import iconPlus from "./assets/images/icon-plus.svg"
import iconMinus from "./assets/images/icon-minus.svg"

const Accordion = ({title, data}) => {
    console.log(title);
    console.log(data);
    const toggleAccordion = (e) => {
        const label = e.currentTarget;
        const panel = label.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            label.lastChild.src = iconPlus;
            label.lastChild.alt = "Plus icon";
        }
        else {
            panel.style.display = "block";
            label.lastChild.src = iconMinus;
            label.lastChild.alt = "Minus icon";
        }
        panel
        
    }
    return ( 
        <div className="accordion-box">
            <div className="title">
                <img src={iconStar} alt="Purple Star" />
                <h1>{title}</h1>
            </div>
            { data.map((accordion) => (
                <div className="accordion" key={ accordion.id }>
                    <div className="label" onClick={(e) => toggleAccordion(e)}>
                        <p>{ accordion.label }</p>
                        <img src={iconPlus} alt="Plus icon" />
                    </div>
                    <div className="panel">
                        <p>{ accordion.panel }</p>
                    </div>
                </div>
            )) }
        </div>
    );
}
 
export default Accordion;