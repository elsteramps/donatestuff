import React from 'react';
import dec from '../assets/Decoration.svg'
import { useState } from 'react';
import axios from 'axios';

function HomeContacts(props) {

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [successActiveClass, setSuccessActiveClass] = useState('');
    const [failedActiveClass, setFailedActiveClass] = useState('')

    const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const onSubmitHandler = async e => {
        e.preventDefault();
        if(nameValue !== '' && nameValue.indexOf(' ') !== 0 && emailValue.match(pattern) && messageValue !== ''){
            
            const data = {
                name: nameValue,
                email: emailValue,
                message: messageValue 
            }

            const res = await axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact', data)
            .then(res => {
                if (res.data !== 0){
                    setSuccessActiveClass('active-scs');
                }
            })
            .catch(error => {
                console.log(error);
              });
            
        }
        else{
            setFailedActiveClass('active-failed')  
        }
    }

    return (
        <div id='contact'>
            <div className='content'>
                <h2>Skontaktuj się z nami</h2>
                <img src={dec} alt='dec'></img>
                <p className={`msg-scs ${successActiveClass}`}>Widomość została wysłana</p>
                <form type='submit'>
                    <p className='nameEmail'>
                    <label for='name'>Wpisz swoje imię</label>
                    <input type='text' id='name' name='name' value={nameValue} onChange={(e) => setNameValue(e.target.value)}></input>
                    <p className={`msg-failed ${failedActiveClass}`}>Podaj właściwe dane</p>
                    </p>
                    <p className='nameEmail'>
                    <label for='email'>Wpisz swój email</label>
                    <input type='text' id='email' name='email' value={emailValue} onChange={(e) => setEmailValue(e.target.value)}></input>
                    <p className={`msg-failed ${failedActiveClass}`}>Podaj właściwe dane</p>
                    </p>
                    <p className='message'>
                    <label id='message' for='message'>Wpisz swoją wiadomość</label>
                    <textarea type='text' name='message' value={messageValue} onChange={(e) => setMessageValue(e.target.value)}></textarea>
                    <input onClick={onSubmitHandler} className='messageButton' type='submit' value='Wyślij!'></input>
                    <p className={`msg-failed ${failedActiveClass}`}>Podaj właściwe dane</p>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default HomeContacts;