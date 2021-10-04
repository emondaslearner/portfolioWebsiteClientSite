import React from 'react';
import './Menu.css'
import logo1 from '../../image/logo-light.png'
import logo2 from '../../image/Screenshot_2-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp,faBars,faTimes } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    window.addEventListener('scroll',() => {
        if(document.documentElement.scrollTop > 150){
            document.querySelector('.mainM').classList.add('main-menu')
            document.querySelector('.onFixed').style.display ='block';
            document.querySelector('.onActive').style.display ='none';
            document.querySelector('.bars').style.color ='black';
            document.querySelector('.bar').style.top ='25px';
            document.querySelector('.nav').style.position ='relative';
        }else{
            document.querySelector('.mainM').classList.remove('main-menu')
            document.querySelector('.onFixed').style.display ='none';
            document.querySelector('.onActive').style.display ='block';
            document.querySelector('.bars').style.color ='white';
            document.querySelector('.bar').style.top ='40px';
            if(window.innerWidth < 765){
                document.querySelector('.nav').style.position ='absolute';
            }
        }
        //scroll to top

        if(document.documentElement.scrollTop > 200){
            document.querySelector('.topScroll').style.opacity = '1';
            document.querySelector('.topScroll').classList.add('addAnimation');
        }else{
            document.querySelector('.topScroll').style.opacity = '0';
            document.querySelector('.topScroll').classList.remove('addAnimation');
        }

        //change active class

        if(document.documentElement.scrollTop >= document.querySelector('.header').offsetTop){
            const nav = document.querySelector('.anchor').children;
            for(let i = 0;i < nav.length;i++){
                document.querySelectorAll('.anchor a')[i].classList.remove('active')
            }
            document.querySelector('.homeMenu').classList.add('active');
        }

        if(document.documentElement.scrollTop >= document.querySelector('.about').offsetTop){
            const nav = document.querySelector('.anchor').children;
            for(let i = 0;i < nav.length;i++){
                document.querySelectorAll('.anchor a')[i].classList.remove('active')
            }
            document.querySelector('.aboutMenu').classList.add('active');
        }

        if(document.documentElement.scrollTop >= document.querySelector('.portfolio').offsetTop){
            const nav = document.querySelector('.anchor').children;
            for(let i = 0;i < nav.length;i++){
                document.querySelectorAll('.anchor a')[i].classList.remove('active')
            }
            document.querySelector('.portfolioMenu').classList.add('active');
        }

        if(document.documentElement.scrollTop >= document.querySelector('.connect').offsetTop){
            const nav = document.querySelector('.anchor').children;
            for(let i = 0;i < nav.length;i++){
                document.querySelectorAll('.anchor a')[i].classList.remove('active')
            }
            document.querySelector('.connectMenu').classList.add('active');
        }
        
    })
    

    const toTop = () => {
        document.documentElement.scrollTop = '0'
    }
    const showMenu = () => {
        document.querySelector('.nav').style.display = 'block'
        document.querySelector('.nav').classList.add ('animateMenu')
    }
    const hideMenu = () => {
        document.querySelector('.nav').style.display = 'none'
        document.querySelector('.nav').classList.remove('animateMenu')
    }
    return (
        <>
            <div className="mainM">
                <div className="row menu">
                    <div className="col-3 logo">
                        <img className="onActive" src={logo1} alt=""/>
                        <img className="onFixed" src={logo2} alt=""/>
                    </div>
                    <div className="col-9 nav">
                        <div className="anchor">
                            <a className="homeMenu active" href="#home">Home</a>
                            <a className="aboutMenu" href="#about">About</a>
                            <a className="portfolioMenu"  href="#portfolio">Portfolio</a>
                            <a className="connectMenu" href="#connect">Connect</a> 
                        </div>    
                        <div className="close">
                            <FontAwesomeIcon onClick={hideMenu} className="closer" icon={faTimes} />
                        </div>
                    </div>
                </div>
                <div className="bar">
                    <FontAwesomeIcon onClick={showMenu} className="bars" icon={faBars} />
                </div>             
            </div>
            <div className="topScroll">
                <FontAwesomeIcon onClick={toTop} className="arrow" icon={faChevronUp} />
            </div>
        </>
    );
};

export default Menu;