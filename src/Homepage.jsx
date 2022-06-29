import React, {useState} from 'react';
import {Header} from './components/Header/Header';
import {MatchCard} from './components/MatchCard/MatchCard';
import './homepageStyles.css';
import premierLeaugeLogo from './assets/premierLeaugeLogo.png'

export function Homepage(){
    const [score, setScore] = useState(0);
    const handleSetScore = (s) =>{
        console.log("Scoree ", s)
        setScore(s);
    }

    React.useEffect(() =>{
        console.log("Score updated ", score);
    }, [score])
    return(
        <>
            <Header/>
            <div className="PremierLeagueLogo">
                <img src={premierLeaugeLogo} className="PLlogo"/>
                <h1 className="title">
                    Premier League
                </h1> 
                <div className="TotalPointsContainer">
                    <div className="TotalPointsCircle">
                        <span className="PointsValue">
                            {score}
                        </span>
                    </div>
                </div>
            </div> 
            <MatchCard handleSetScore={handleSetScore}/>
        </>
    )
}