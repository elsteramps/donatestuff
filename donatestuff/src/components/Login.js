import React from 'react';
import {Link} from 'react-router-dom'
import {Link as LinkRoll} from 'react-scroll'
import dec from '../assets/Decoration.svg'

function Login(props) {
    return (
        <div>
            <nav className='auth'>
                <Link className='navlink' to='/login'>Zaloguj się!</Link>
                <Link className='navlink' to='/signup'>Zarejestruj się!</Link>
             </nav>
        <div className='menu'>
            <ul className='navlist'>
                <li className='navlink'>
                    <LinkRoll activeClass="active" className='link' to="helpus" spy={true} smooth={true} duration={500}>Start</LinkRoll>
                </li>
                <li className='navlink'>
                    <LinkRoll activeClass="active" className='link' to="4steps" spy={true} smooth={true} duration={500}>O co chodzi</LinkRoll>
                </li>
                <li className='navlink'>
                    <LinkRoll activeClass="active" className='link' to="about" spy={true} smooth={true} duration={500}>O nas</LinkRoll>
                </li>
                <li className='navlink'>
                    <LinkRoll activeClass="active" className='link' to="whohelp" spy={true} smooth={true} duration={500}>Fundacja i organizacje</LinkRoll>
                </li>
                <li className='navlink'>
                    <LinkRoll activeClass="active" className='link' to="contact" spy={true} smooth={true} duration={500}>Kontakt</LinkRoll>
                </li>
            </ul>
        </div>
        <div className='label'>
        <h2>Zaloguj się</h2>
        <img src={dec} width={200} alt='dec'></img>
        </div>
        <div className='form-div'>
            <div className='form-wrapper'>
        <div>
            <form type='submit'>
                <p>
                <label name='email' for='email'>Email</label>
                <input type='text' id='email' name='email'></input>
                </p>
                <p>
                <label name='password' for='password'>Hasło</label>
                <input type='text' id='password' name='password'></input>
                </p>
            </form>
        </div>
        </div>
        </div>
        <div className='auth-bottom-wrapper'>
        <div className='auth-bottom'>
                <Link className='navlink' to='/login'>Zaloguj się!</Link>
                <Link className='navlink' to='/signup'>Zarejestruj się!</Link>
             </div>
             </div>
        </div>
    );
}

export default Login;