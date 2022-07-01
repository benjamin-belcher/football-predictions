import React from 'react';
// import {Linking}from "react-native";
import './styles.css';
import Facebook from '../../assets/Facebook.png';
import Instagram from '../../assets/Instagram.png';
import Twitter from '../../assets/Twitter.png';
import Youtube from '../../assets/Youtube.png';
import homepageicon from '../../assets/homepageicon.svg';

export function Header(){
    return(
        <div className="header">
            <div className="logos"> 
                <br/>
                    <a target="_blank" href="https://www.facebook.com">
                        <img src={Facebook} className="img"alt="alt"/>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/?hl=en">
                        <img src={Instagram} className="img" alt="alt"/>
                    </a>
                    <a target="_blank" href="https://twitter.com/?lang=en-gb.com">
                        <img src={Twitter} className="img" alt="alt"/>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/?gl=GB&hl=en-GB.com">
                        <img src={Youtube} className="img" alt="alt"/>
                    </a>
            </div>
        </div>
    )
}