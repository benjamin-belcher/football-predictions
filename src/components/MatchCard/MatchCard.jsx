import React, {useState} from 'react';
import {Predictions} from '../PredictionsForm/Predictions';
import * as MatchData from '../../assets/PLMatches.json';
import './styles.css';

export function MatchCard(props){
    const [data, setData] = useState([]);
    const [predictedHome, setPredictedHome] = useState();
    const [predictedAway, setPredictedAway] = useState();
    const [showActualScore, setShowActualScore] = useState(false);
    const [score, setScore]  = useState(0);
    const [match, setMatch] = useState();
    const [successText, setSuccessText] = useState("");

    const setScores = (home, away) =>{
        setPredictedHome(home);
        setPredictedAway(away);
        console.log("Predicted Home ", home, "Actual Home ", match.score.fullTime.home,  "Predicted Away ", away, "Actual Away ", match.score.fullTime.away)
        compareScores(home, away);
        setShowActualScore(!showActualScore);
    }

    React.useEffect(() =>{
        console.log("Score on effect ", score);
        props.handleSetScore(score);
    }, [score])

    const compareScores = (home, away) => {
        console.log(match)
        var tempScore=0;
        if(home == match.score.fullTime.home && away == match.score.fullTime.away){
            setSuccessText("You Guessed Perfectly - 5 Points!");
            tempScore=4
        }
        else if(home == match.score.fullTime.home){
            if(winner(home, away)==1){
                setSuccessText("You guessed the home score and outcome correctly - 2 Points!")
            }
            else{
                setSuccessText("You guessed the home score right but not the outcome - 1 Point!");
            }
            tempScore=1
        }
        else if(away == match.score.fullTime.away){
            if(winner(home, away)==1){
                setSuccessText("You guessed the away score and outcome correctly - 2 Points!")
            }
            else{
                setSuccessText("You guessed the away score right but not the outcome - 1 Point!");
            }
            tempScore=1
        }
        else{
            setSuccessText("You only guessed the outcome corectly - 1 Point!")
        }
        tempScore+=winner(home, away)
        setScore(score+tempScore)
    }
    function winner(home, away){
        var winner=match.score.winner
        if(home>away && winner=="HOME_TEAM"){
            return 1
        }
        else if(home<away && winner=="AWAY_TEAM"){
            return 1
        }
        else if(home==away && winner=="DRAW"){
            return 1
        }
        else{
            return 0
        }
    }

    React.useEffect(() => {
        if(data.length === 0 ){
            getMatchData();
        }
    }, [data])

    const getMatchData = () =>{
        const rawData = JSON.parse(JSON.stringify(MatchData));
        const matchData = rawData.matches;
        setData(matchData);
        console.log(matchData);
        getNewMatchData(matchData);
    }

    const getNewMatchData = (matchList) =>{
        let localMatch = matchList[Math.floor(Math.random()*matchList.length)]
        console.log(localMatch);
        setMatch(localMatch);
        setPredictedHome();
        setPredictedAway();
        setSuccessText("");
        setScore(0);
    }

    const goToNextGame = () =>{
        setShowActualScore(false);
        getNewMatchData(data);
    }
    return(    
        <>
        {!match ? <> No Match </> : 
                <>
                {showActualScore ? 
                score > 0 ? 
                <div className="successText">
                    <h4 className="messageHeader">{successText}</h4>
                    <h6 className="messageBody"></h6>
                </div>
                : 
                <div className="failureText">
                    <h4 className="messageHeader">Those predictions where wrong</h4>
                    <h6 className="messageBody">Please move to the next match</h6>
                </div>
                
                : <></>
                }
                {!showActualScore ? <Predictions setScores={setScores}/> : <></>}
                
                <div className="MatchCard">
                    <div>
                        <h4 id="MatchCard1Team1">
                            {!match ? "Team 1": match.homeTeam.name}
                        </h4>
                        <img className="ClubLogo" id="MatchHomeTeam1" src={!data ? "" :match.homeTeam.crest} alt="alt"/>
                    </div>
                    <div>
                        <h4 className="Versus">
                            Vs
                        </h4>
                        <div className="Scores">
                            <h5 className="h5S">
                                Predicted Scores
                            </h5>
                            <div className="Predicted-Scores">
                                <h6 className="h6S">
                                    {!match ? "-" : predictedHome}
                                </h6>
                                <h6>
                                    {!match ? "-" : predictedAway}
                                </h6>
                            </div>
                            <h5 className="h5S">
                                Actual Scores
                            </h5>
                            <div className="Actual-Scores">
                                <h6  className="h6S" id="MatchCard1HomeScore1">
                                {!showActualScore ? "-" : match.score.fullTime.home}
                                </h6>
                                <h6 id="MatchCard1AwayScore1">
                                {!showActualScore ? "-" : match.score.fullTime.away}
                                </h6>
                            </div>
                            <h5 className="h5S">
                                Points
                            </h5>
                            <h6>
                                {score}
                            </h6>
                        </div>

                    </div>
                    <div>
                        <h4 id="MatchCard1Team2"s>
                        {!match ? "Team 2": match.awayTeam.name}
                        </h4>
                        <img className="ClubLogo" id="MatchAwayTeam1" src={!data ? "" :match.awayTeam.crest} alt="alt"/>
                    </div>
                </div>
                <button className="nextGameButton" onClick={goToNextGame}>Next Game</button>
                </>
        }  
        </>
    )
}