import React, { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    let count = 0;
    const get = () => {
        count = count + 1;

        let i = 0;
        let text1;
        if(count == 1){
            text1 = 'Web Designer.';
        }else if(count == 2){
            text1 = 'Web Developer.';
        }else if(count == 3){
            text1 = 'Mern Stack Developer.';
        }

        if(count == 3){
            count = 0;
        }
        function typeWriter() {
            if (i < text1.length) {
                document.querySelector(".span").innerHTML += text1.charAt(i);
                i++;
            }
            setTimeout(typeWriter, 100);
        }
        typeWriter()

        const removeWriter = () => {
            const text = document.querySelector('.span').innerHTML;
            let j = text.length;
            let i = 0;
            if(i < j){
                document.querySelector('.span').innerHTML = text.slice(0, text.length - 1);
                setTimeout(removeWriter,100)
            }
        }
        setTimeout(removeWriter, 4000);
    }
    useEffect(() => {
        setTimeout(get,1000)
        setInterval(get,8000)
    },[])
    return (
        <div id="home" className="header">
            <Menu></Menu>
            <div className="headerContent">
                <h6>Introduction</h6>
                <h1>My Name Is Emon Das From Bangladesh.</h1>
                <h1>I Am A <span className="span"></span></h1>
                <a href="#portfolio">SEE MY PORTFOLIO <FontAwesomeIcon className="rightArrow" icon={faArrowRight} /></a>
            </div>
        </div>
    );
};

export default Header;