// import React, {useState}  from "react";
// import './styles.css';
// import premierLeaugeLogo from '../../assets/premierLeaugeLogo.png'

// export function Title(props){
//     const [points, setPoints] = useState(props.score);
//     React.useEffect(() =>{
//         console.log("In Title ", props.score)
//         setPoints(props.score);
//     },[points])
//     return(
//         <div className="PremierLeagueLogo">
//             <img src={premierLeaugeLogo} className="PLlogo"/>
//             <h1 className="title">
//                 Premier League
//             </h1> 
//             <div className="TotalPointsContainer">
//                 <div className="TotalPointsCircle">
//                     <span className="PointsValue">
//                         {points}
//                     </span>
//                 </div>
//             </div>
//         </div> 
//     )
// }