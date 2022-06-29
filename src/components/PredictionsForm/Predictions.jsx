import React, {useState} from "react";

export function Predictions(props){
    const [predictedHome, setPredictedHome] = useState(0);
    const [predictedAway, setPredictedAway] = useState(0);
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
            <input type="number" placeholder="Predicted Home Score" required value={predictedHome} onChange={(e)=> {handlePredictedHome(e)}}/>
            <input type="number" placeholder="Predicted Away Score" required value={predictedAway} onChange={(e)=>{handlePredictedAway(e)}}/>
            <button onClick={handleClick}>
                See Scores
            </button>
    </div>
    )
}