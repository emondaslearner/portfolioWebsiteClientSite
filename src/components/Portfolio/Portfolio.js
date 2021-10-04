import React, { useEffect, useState } from 'react';
import './Portfolio.css'
import porject1 from '../../image/screencapture-creativeagency-87a4e-web-app-2021-10-02-23_28_26.png'
import porject2 from '../../image/screencapture-doctor-61229-web-app-2021-10-02-22_31_34.png'
import porject3 from '../../image/screencapture-gym-master-13ed6-web-app-2021-10-02-22_35_37.png'
import porject4 from '../../image/screencapture-ema-jone-78050-web-app-2021-10-03-23_10_55 (1).png'

const Portfolio = () => {
    //count slide positions and status 1
    const [position,setPosition] = useState(0)
    const [status,setStatus] = useState(null)

    //count slide positions and status 2

    const [position1,setPosition1] = useState(0)
    const [status1,setStatus1] = useState(null)
    //count slide positions and status 3

    const [position2,setPosition2] = useState(0)
    const [status2,setStatus2] = useState(null)

    //count slide positions and status 4
    const [position3,setPosition3] = useState(0)
    const [status3,setStatus3] = useState(null)


    //project 1
    useEffect(() => {
        if(position < 0){
            setPosition(0)
        } 
        if(position1 < 0){
            setPosition1(0)
        } 
        if(position2 < 0){
            setPosition2(0)
        } 
        if(position3 < 0){
            setPosition3(0)
        } 
        

        //handle slide position 1
        if(position > (document.querySelector(`#project1`).offsetHeight - document.querySelector('.project').offsetHeight)){
            setPosition((document.querySelector(`#project1`).offsetHeight - document.querySelector('.project').offsetHeight))
        }
        document.querySelector(`#project1`).style.top = `-${position}px`



        //handle slide position 2
        if(position1 > (document.querySelector(`#project2`).offsetHeight - document.querySelector('.project').offsetHeight)){
            setPosition1((document.querySelector(`#project2`).offsetHeight - document.querySelector('.project').offsetHeight))
        }
        document.querySelector(`#project2`).style.top = `-${position1}px`



        //handle slide position 3
        if(position2 > (document.querySelector(`#project3`).offsetHeight - document.querySelector('.project').offsetHeight)){
            setPosition2((document.querySelector(`#project3`).offsetHeight - document.querySelector('.project').offsetHeight))
        }
        document.querySelector(`#project3`).style.top = `-${position2}px`




        //handle slide position 4
        if(position3 > (document.querySelector(`#project4`).offsetHeight - document.querySelector('.project').offsetHeight)){
            setPosition3((document.querySelector(`#project4`).offsetHeight - document.querySelector('.project').offsetHeight))
        }
        document.querySelector(`#project4`).style.top = `-${position3}px`
        
    },[position,position1,position2,position3])



    //handle slide image 1
    useEffect(() => {
        let interval
        let inter
        if(status == true){
            interval = setInterval(() => {
                setPosition(prevCount => (prevCount +  1));
            },10);
        }else{
            if(position > 0){
                inter = setInterval(() => {
                    setPosition(prevCount => (prevCount -  1));
                },10);
            }    
            return () => clearInterval(inter)
        }
            return () => clearInterval(interval)
    },[status])



    //handle slide 2
    useEffect(() => {
        let interval
        let inter
        if(status1 == true){
            interval = setInterval(() => {
                setPosition1(prevCount => (prevCount +  1));
            },10);
        }else{
            if(position1 > 0){
                inter = setInterval(() => {
                    setPosition1(prevCount => (prevCount -  1));
                },10);
            }    
            return () => clearInterval(inter)
        }
            return () => clearInterval(interval)
    },[status1])


    //handle slide 3
    useEffect(() => {
        let interval
        let inter
        if(status2 == true){
            interval = setInterval(() => {
                setPosition2(prevCount => (prevCount +  1));
            },10);
        }else{
            if(position2 > 0){
                inter = setInterval(() => {
                    setPosition2(prevCount => (prevCount -  1));
                },10);
            }    
            return () => clearInterval(inter)
        }
            return () => clearInterval(interval)
    },[status2])


    //handle slide 4
    useEffect(() => {
        let interval
        let inter
        if(status3 == true){
            interval = setInterval(() => {
                setPosition3(prevCount => (prevCount +  1));
            },10);
        }else{
            if(position3 > 0){
                inter = setInterval(() => {
                    setPosition3(prevCount => (prevCount -  1));
                },10);
            }    
            return () => clearInterval(inter)
        }
            return () => clearInterval(interval)
    },[status3])



    //slide image 1
    const imgPosition = (e) => {
        setStatus(true)
    } 
    const mouseout = () => {
        setStatus(false)
    }


    //slide image 2
    const imgPosition1 = (e) => {
        setStatus1(true)
    }
    const mouseout1 = () => {
        setStatus1(false)
    }


    //slide image 3
    const imgPosition2 = (e) => {
        setStatus2(true)
    }
    const mouseout2 = () => {
        setStatus2(false)
    }


    //slide image 4
    const imgPosition3 = (e) => {
        setStatus3(true)
    }
    const mouseout3 = () => {
        setStatus3(false)
    }

    window.addEventListener('scroll',() => {
        if(document.documentElement.scrollTop >= document.querySelector('.projects').offsetTop-600){
            document.querySelector('.project').style.opacity = '1';
            document.querySelector('.project').classList.add('animate__fadeInDown');
            document.querySelectorAll('.project')[1].style.opacity = '1';
            document.querySelectorAll('.project')[1].classList.add('animate__fadeInDown');
            document.querySelectorAll('.project')[2].style.opacity = '1';
            document.querySelectorAll('.project')[2].classList.add('animate__fadeInDown');
            document.querySelectorAll('.project')[3].style.opacity = '1';
            document.querySelectorAll('.project')[3].classList.add('animate__fadeInDown');

            document.querySelector('.portfolio h1').classList.add('animate__fadeInRight');
            document.querySelector('.portfolio h1').style.opacity = '1';
        }
    })
    
    return (
        <div id="portfolio" className="portfolio">
            <h1 className="animate__animated">PORTFOLIO</h1>
            <div className="row projects">
                <div onClick={() => {
                    window.open('https://creativeagency-87a4e.web.app/')
                }} className="col-3 animate__animated project">
                    <img id="project1" onMouseOut={mouseout} onMouseOver={imgPosition} src={porject1} alt=""/>
                </div>

                <div onClick={() => {
                    window.open('https://doctor-61229.web.app/')
                }} className="col-3 animate__animated project">
                    <img id="project2" src={porject2} onMouseOut={mouseout1} onMouseOver={imgPosition1} alt=""/>
                </div>

                <div onClick={() => {
                    window.open('https://gym-master-13ed6.web.app/')
                }} className="col-3 animate__animated project">
                    <img id="project3" src={porject3} onMouseOut={mouseout2} onMouseOver={imgPosition2} alt=""/>
                </div>

                <div onClick={() => {
                    window.open('https://hotel-booking-dda49.web.app/')
                }} className="col-3 animate__animated project">
                    <img id="project4" src={porject4} onMouseOut={mouseout3} onMouseOver={imgPosition3} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;