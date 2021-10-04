import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons' 

const Footer = () => {
     window.addEventListener('scroll',() => {
        if(document.documentElement.scrollTop >= document.querySelector('.footer').offsetTop-550){
            document.querySelector('.footer ul').style.opacity = '1';
            document.querySelector('.footer ul').classList.add('animate__bounceIn');
        }
    })
    return (
        <div className="footer">
            <ul className="animate__animated">
                <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100042268110201"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a target="_blank" href="https://github.com/emondaslearner"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a target="_blank" href="https://github.com/emondaslearner"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
        </div>
    );
};

export default Footer;