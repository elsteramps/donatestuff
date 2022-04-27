import React from 'react';
import dec from '../assets/Decoration.svg'
import shirt from '../assets/Icon-1.svg'
import pack from '../assets/Icon-2.svg'
import lupa from '../assets/Icon-3.svg'
import refresh from '../assets/Icon-4.svg'
import { Link } from 'react-router-dom';

function Home4Steps(props) {
    return (
        <div id='4steps'>
            <section className='fourstepslogo'>
                <h2>Wystarczą 4 prostę kroki</h2>
                <img src={dec} alt='dec'></img>
            </section>
            <section className='colsection'>
            <div className='container'>
                <div className='col'>
                    <img className='img' src={shirt} alt='shirt'></img>
                    <span className='coltext'>Wybierz rzeczy</span>
                    <hr/>
                    <p className='textundertheline'>alfsh asfhli  ;sjgb;abv;ab dv;asdfgh;asd bg;asdbg;asdgb sfglu</p>
                </div>
                <div className='col'>
                    <img className='img' src={pack} alt='pack'></img>
                    <span className='coltext'>Spakj je</span>
                    <hr/>
                    <p className='textundertheline'>alfsh asfhli  ;sjgb;abv;ab dv;asdfgh;asd bg;asdbg;asdgb sfglu</p>
                </div>
                <div id='lupa' className='col'>
                    <img className='img' src={lupa} alt='lupa'></img>
                    <span className='coltext'>Zdecyduj komu chcesz pomóc</span>
                    <hr/>
                    <p className='textundertheline'>alfsh asfhli  ;sjgb;abv;ab dv;asdfgh;asd bg;asdbg;asdgb sfglu</p>
                </div>
                <div className='col'>
                    <img className='img' src={refresh} alt='refresh'></img>
                    <span className='coltext'>Zamów kuriera</span>
                    <hr/>
                    <p className='textundertheline'>alfsh asfhli  ;sjgb;abv;ab dv;asdfgh;asd bg;asdbg;asdgb sfglu</p>
                </div>
                </div>
            </section>
            <div className='buttonn'>
                <Link to='/signup' className='btn'>ODDAJ RZECZY</Link>
            </div>
        </div>
    );
}

export default Home4Steps;