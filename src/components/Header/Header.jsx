import React from 'react';
import './styles.css';
import Facebook from '../../assets/Facebook.png';
import Instagram from '../../assets/Instagram.png';
import Twitter from '../../assets/Twitter.png';
import Youtube from '../../assets/Youtube.png';
import homepageicon from '../../assets/homepageicon.svg';

export function Header(){
    return(
        <div className="header">
            <div className="logo">
                <img src={homepageicon}/>
            </div>
            <div className="logos"> 
                <br/>
                    <div className="logo">
                        <img src={Facebook} className="img"alt="alt"/>
                    </div>
                    <div className="logo">
                        <img src={Instagram} className="img" alt="alt"/>
                    </div>
                    <div className="logo">
                        <img src={Twitter} className="img" alt="alt"/>
                    </div>
                    <div className="logo">
                        <img src={Youtube} className="img" alt="alt"/>
                    </div>
            </div>
        </div>
    )
}