import React from 'react';
import {Link} from 'react-router-dom'
import {Link as LinkRoll} from 'react-scroll'
import dec from '../assets/Decoration.svg'

function HomeHeaderMenu(props) {
    return (
        <header>
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
        <div className='donatestuff'>
            <div className='starthelp'>
            <h2>Zacznij pomagać!</h2>
            <h2>Oddaj Niechciane rzeczy w zaufane ręce!</h2>
            <img src={dec} className='dec' alt='dec'></img>
                <div className='buttons'>
                    <Link to='/signup' className='btn'>ODDAJ RZECZY</Link>
                    <Link to='/signup' className='btn'>ZORGANIZUJ ZBIORKĘ</Link>
                </div>
            </div>
        </div>
        </div>
        </header>
    );
}

export default HomeHeaderMenu;