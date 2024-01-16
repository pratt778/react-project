import { useState } from "react";
import './acc.css'
const Accord = ({ title, content }) => {
    const [clicked, setClicked] = useState(false);
    return <>
        <div className="acc-container">
                    <div className="title" onClick={() => setClicked(!clicked)}>
                        <span>{title}</span>
                        <span>{!clicked ? '+' : '-'}</span>
                    </div>
                {
                    clicked ? <div className="info">
                        <span>{content}</span>
                    </div> : <div></div>
                }
                
        </div>
    </>
}

export default Accord;