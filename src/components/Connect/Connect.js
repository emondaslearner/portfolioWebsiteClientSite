import React, { useEffect, useState } from 'react';
import './Connect.css'
const Connect = () => { 
    window.addEventListener('scroll',() => {
        if(document.documentElement.scrollTop >= document.querySelector('form').offsetTop-300){
            document.querySelector('form').style.opacity = '1';
            document.querySelector('form').classList.add('animate__bounceIn');
            document.querySelector('.connect h1').classList.add('animate__rotateInUpLeft');
        }
    })

    const submit = (e) => {
        let setError;
        e.preventDefault();
        const name = document.querySelector('.name').value;
        const email = document.querySelector('.email').value;
        const message = document.querySelector('.message').value;

        if(name == ''){
            document.querySelectorAll('.connect form input')[0].style.boxShadow = '2px 2px 20px red'
            setError = false
        }else{
            document.querySelectorAll('.connect form input')[0].style.boxShadow = ''
            setError = true
        }


        if(email == ''){
            document.querySelectorAll('.connect form input')[1].style.boxShadow = '2px 2px 20px red'
            setError = false
        }else{
            document.querySelectorAll('.connect form input')[1].style.boxShadow = ''
            setError = true
        }


        if(message == ''){      
            document.querySelector('.connect form textarea').style.boxShadow = '2px 2px 20px red'
            setError = false
        }else{
            document.querySelector('.connect form textarea').style.boxShadow = ''
            setError = true
        }


        if(setError == true){
            fetch('http://localhost:8000/message',{
                method:'POST',
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
                body:JSON.stringify({name,email,message})
            })
            .then(res => res.json())
            .then(data => {
                document.querySelector('form').classList.remove('animate__rotateInUpLeft');
                document.querySelectorAll('.connect form input')[0].style.boxShadow = '2px 2px 20px green'
                document.querySelectorAll('.connect form input')[1].style.boxShadow = '2px 2px 20px green'
                document.querySelector('.connect form textarea').style.boxShadow = '2px 2px 20px green'
                document.querySelector('.connect form').reset()    
            })
            .catch(err => {       
                document.querySelectorAll('.connect form input')[0].style.boxShadow = '2px 2px 20px red'
                document.querySelectorAll('.connect form input')[1].style.boxShadow = '2px 2px 20px red'
                document.querySelector('.connect form textarea').style.boxShadow = '2px 2px 20px red' 
            })
        }

    }
    return (
        <div id="connect" className="connect">
            <h1 className="animate__animated" >CONNECT</h1>
            <form onSubmit={submit} className="animate__animated" action="">
                <input className="name" placeHolder="Name" type="text"/>
                <input className="email" placeHolder="Email" type="email"/>
                <textarea className="message" placeHolder="Your Message" name="" id="" cols="30" rows="5"></textarea>
                <div className="submit">
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );
};

export default Connect;