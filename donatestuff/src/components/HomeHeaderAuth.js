import React from 'react';
import { Link } from 'react-router-dom';

function HomeHeaderAuth() {
    return (
        <>
        <nav className='auth'>
            <Link className='navlink' to='/login'>Zaloguj się!</Link>
            <Link className='navlink' to='/signup'>Zarejestruj się!</Link>
        </nav>
        </>
    );
}

export default HomeHeaderAuth;