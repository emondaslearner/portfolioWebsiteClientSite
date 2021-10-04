import React, { useEffect } from 'react';
import './About.css'
import img1 from '../../image/833926.png'
import img2 from '../../image/responsive-icon-24441.png'
import img3 from '../../image/166340.png'
import sellerImg from '../../image/Screenshot_1.png'
import "animate.css"


const About = () => {
        window.addEventListener('scroll',() => {
            if(document.documentElement.scrollTop >= 50){
                document.querySelector('.about h1').style.display = 'block';
                document.querySelector('.about h1').classList.add('animate__backInLeft');
            }
            if(document.documentElement.scrollTop >= 300){
                document.querySelectorAll('.about .work')[0].style.opacity = 1
                document.querySelectorAll('.about .work')[1].style.opacity = 1
                document.querySelectorAll('.about .work')[2].style.opacity = 1

                document.querySelectorAll('.about .work')[0].classList.add('animate__fadeInRight')
                document.querySelectorAll('.about .work')[1].classList.add('animate__fadeInRight')
                document.querySelectorAll('.about .work')[2].classList.add('animate__fadeInRight')
            }

            if(document.documentElement.scrollTop >= document.querySelector('.aboutSellers').offsetTop-350){
                document.querySelector('.aboutSellers').style.opacity = '1';
                document.querySelector('.aboutSellers').classList.add('animate__fadeInLeft')
            }

            if(document.documentElement.scrollTop >= document.querySelector('.aboutSkills').offsetTop-350){
                document.querySelector('.aboutSkills').style.opacity = '1';
                document.querySelector('.aboutSkills').classList.add('animate__fadeInRight')


                //animation lang bar
                document.querySelectorAll('.html')[0].classList.add('html2')
                document.querySelectorAll('.html')[1].classList.add('html2')
                document.querySelectorAll('.bootstrap')[0].classList.add('bootstrap2')
                document.querySelectorAll('.bootstrap')[1].classList.add('bootstrap2')
                document.querySelectorAll('.bootstrap')[2].classList.add('bootstrap2')
                document.querySelectorAll('.react')[0].classList.add('react2')
                document.querySelectorAll('.react')[1].classList.add('react2')
                document.querySelectorAll('.react')[2].classList.add('react2')
                document.querySelectorAll('.react')[3].classList.add('react2')
                document.querySelector('.jquery').classList.add('jquery2')
            }
        })
    return (
        <div id="about" className="about">
            <h1 className="animate__animated" data-wow-duration="2s" data-wow-delay="5s">ABOUT</h1>
            <div className="row aboutWork">
                <div className="animate__animated col-3 work">
                    <img src={img1} alt=""/>
                    <h2>Fast</h2>
                    <p>Fast load and lag free interaction my highly priority.</p>
                </div>
                <div className="animate__animated col-3 work">
                    <img src={img2} alt=""/>
                    <h2>Responsive</h2>
                    <p>My layout will work on any device.big or small.</p>
                </div>
                <div className="animate__animated col-3 work">
                    <img src={img3} alt=""/>
                    <h2>Dynamic</h2>
                    <p>Website do not have static.I love making pages come to life.</p>
                </div>
                
            </div>
            <div className="row skills">
                <div className="animate__animated col-5 aboutSellers">
                    <img src={sellerImg} alt=""/>
                    <h3>Who's this guy?</h3>
                    <p>I am a Mern Stack Developer.I have serious passion for animations and creating intuitive, dynamic user experiences.</p>
                    <a href="#connect">Let's make something special.</a>
                </div>
                <div className="animate__animated col-7 aboutSkills">
                    <h2>SKILLS</h2>
                    <div className="langues languesAnimation">
                        <div className="html">
                            <div>
                                <span>HTML</span>
                                <span className="persen">90%</span>
                            </div>
                            <div className="skillsOfLanguage"></div>                     
                        </div>
                        <div className="html">
                            <div>
                                <span>CSS</span>
                                <span className="persen">90%</span>
                            </div>
                            <div className="skillsOfLanguage"></div>     
                        </div>
                        <div className="bootstrap">
                            <div>
                                <span>Bootstrap</span>
                                <span className="persen">70%</span>
                            </div>
                            <div className="skillsOfLanguage"></div>     
                        </div>
                        <div className="bootstrap">
                            <div>
                                <span>Sass</span>
                                <span className="persen">70%</span>
                            </div>
                            <div className="skillsOfLanguage"></div>     
                        </div>
                        <div className="react">
                            <div>
                                <span>React</span>
                                <span className="persen">80%</span>
                            </div>
                            <div className="skillsOfLanguage"></div>  
                        </div>
                        <div className="react">
                            <div>
                                <span>Javascript</span>
                                <span className="persen">80%</span>
                            </div>
                            <div className="skillsOfLanguage"></div>  
                        </div>
                        <div className="jquery">
                            <div>
                                <span>Jquery</span>
                                <span className="persen">40%</span>
                            </div>
                            <div className="skillsOfLanguage"></div>  
                        </div>
                        <div className="bootstrap">
                            <div>
                                <span>Node.js</span>
                                <span className="persen">70%</span>
                            </div>
                            <div className="skillsOfLanguage"></div>  
                        </div>
                        <div className="react">
                            <div>
                                <span>Express.js</span>
                                <span className="persen">80%</span>
                            </div>
                            <div className="skillsOfLanguage"></div>  
                        </div>
                        <div className="react">
                            <div>
                                <span>MongoDB</span>
                                <span className="persen">80%</span>
                            </div>
                            <div className="skillsOfLanguage"></div>  
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;