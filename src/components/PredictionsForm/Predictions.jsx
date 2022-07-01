import React, {useState} from "react";
import "./styles.css";

export function Predictions(props){
    const [predictedHome, setPredictedHome] = useState();
    const [predictedAway, setPredictedAway] = useState();
    const handleClick = () => {
        props.setScores(predictedHome, predictedAway);
    }

    const handlePredictedHome = (e) => {
        setPredictedHome(e.target.value);
    }

    const handlePredictedAway = (e) => {
        setPredictedAway(e.target.value);
    }

    return(
        <div className="MatchWeek1Total">
            <input className="FullWidthInput" type="number" min="0" max="10" placeholder="Predicted Home Score" required value={predictedHome} onChange={(e)=> {handlePredictedHome(e)}}/>
            <input className="FullWidthInput" type="number" min="0" max="10" placeholder="Predicted Away Score" required value={predictedAway} onChange={(e)=>{handlePredictedAway(e)}}/>
            <button className="FullWidthInput" onClick={handleClick}>
                See Scores
            </button>
    </div>
    )
}