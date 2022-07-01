import React, {useState} from 'react';
import {Header} from './components/Header/Header';
import {MatchCard} from './components/MatchCard/MatchCard';
import './homepageStyles.css';
import premierLeaugeLogo from './assets/premierLeaugeLogo.png'
import premierLeagueTrophy from './assets/premierLeagueTrophy.png'
import football from './assets/football.png'

export function Homepage(){
    const [score, setScore] = useState(0);
    const handleSetScore = (s) =>{
        console.log("Scoree ", s)
        setScore(score + s);
    }
    const handleFacebook=()=>{
        console.log("Message")
    }

    React.useEffect(() =>{
        console.log("Score updated ", score);
    }, [score])
    return(
        <div className="TopDiv">
            <Header handleFacebook={handleFacebook}/>
            <div className="PremierLeagueLogo">
                <a className="PremierLeagueDiv" target="_blank" href="https://www.premierleague.com/tables">
                <img src={premierLeaugeLogo} className="PLlogo" alt="PL"/>
                <h1 className="title">
                    Premier League
                </h1> 
                </a>
                <div className="TotalPointsContainer">
                    <div className="TotalPointsCircle">
                        <span className="PointsValue">
                            {score}
                        </span>
                    </div>
                </div>
            </div> 
            <div className="Content">
                    <div className="trophyContainer">
                        <img src={premierLeagueTrophy} className="trophy" alt="alt"/>
                    </div>
                <div className="Wild">
                    <MatchCard className="matchCard" handleSetScore={handleSetScore}/>
                </div>
                <div className="footballContainer">
                    <img src={football} className="football" alt="alt"/> 
                </div>           
            </div>
        </div>
    )
}