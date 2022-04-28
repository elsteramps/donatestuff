import React from 'react';
import dec from '../assets/Decoration.svg'

function HomeContacts(props) {
    return (
        <div id='contact'>
            <div className='content'>
                <h2>Skontaktuj się z nami</h2>
                <img src={dec} alt='dec'></img>
                <form type='submit'>
                    <label for='name'>Wpisz swoje imię</label>
                    <input type='text' id='name' name='name'></input>
                    <label for='email'>Wpisz swoje imię</label>
                    <input type='text' id='email' name='email'></input>
                    <label for='message'>Wpisz swoje imię</label>
                    <input type='text' id='message' name='message'></input>
                    <input type='submit' value='Wyślij!'></input>
                </form>
            </div>
        </div>
    );
}

export default HomeContacts;