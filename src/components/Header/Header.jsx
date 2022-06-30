import React from 'react';
import {Linking}from "react-native";
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
                <img src={homepageicon} alt="alt"/>
            </div>
            <div className="logos"> 
                <br/>
                    <div className="logo">
                        <img src={Facebook} href="www.facebook.com" onPress={()=>{Linking.openURL("www.Facebook.com")}} className="img"alt="alt"/>
                    </div>
                    <div className="logo">
                        <img src={Instagram} href="www.instagram.com" className="img" alt="alt"/>
                    </div>
                    <div className="logo">
                        <img src={Twitter} href="www.Twitter.com" className="img" alt="alt"/>
                    </div>
                    <div className="logo">
                        <img src={Youtube} href="www.YouTube.com" className="img" alt="alt"/>
                    </div>
            </div>
        </div>
    )
}