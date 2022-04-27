import React from 'react';
import dec from '../assets/Decoration.svg'
import signature from '../assets/Signature.svg'

function HomeAboutUs(props) {
    return (
        <div id='about'>
            <div className='text'>
                <div className='textcontent'>
                <h2> O nas</h2>
                <img src={dec} alt='dec'></img>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='signature'>
                    <img src={signature} alt='sig'></img>
                </div>
            </div>
            <div className='photo'></div>
        </div>
    );
}

export default HomeAboutUs;