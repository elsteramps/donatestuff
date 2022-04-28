import React, { useState } from 'react';
import dec from '../assets/Decoration.svg'
import Pagination from './Pagination';

function HomeWhoHelp(props) {

const fundations = ["Fundacja 'Dbam o Zdrowie'", "Fundacja 'Dla dzieci'", "Fundacja 'Bez domu'", "Fundacja 'Dbam o Zdrowie'", "Fundacja 'alfjlaksflkasfj'", "Fundacja 'asjkfhakjhfskbajsdajbkfd'"];
const organizations = ["Organizacja Lorem ipsum 1", "Organizacja Lorem ipsum 2", "Organizacja Lorem ipsum 3", "Organizacja Lorem ipsum 4", "Organizacja Lorem ipsum 5"];
const local = ["Zbiórka 'Lorem ipsum 1'", "Zbiórka 'Lorem ipsum 2'", "Zbiórka 'Lorem ipsum 3'", "Zbiórka 'Lorem ipsum 4'", "Zbiórka 'Lorem ipsum 5'"]

const [array, setArray] = useState(fundations)
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(3);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = array.slice(indexOfFirstItem, indexOfLastItem);

const onClickHandler = (e) => {
    if(e.target.id === 'b1'){
        setArray(fundations)
    }
    else if(e.target.id === 'b2'){
        setArray(organizations)
    }
    else{
        setArray(local)
    }
}

const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
}

    return (
        <>
        <div id='whohelp'>
            <div className='container'>
            <div className='label'>
                <h2>Komu pomagamy</h2>
                <img src={dec} alt='dec'></img>
            </div>
            <div className = 'helpBtns'>
                <button id='b1' onClick={(e) => onClickHandler(e)} className='btn'>Fundacjom</button>
                <button id='b2' onClick={(e) => onClickHandler(e)} className='btn'>Organizacjom</button>
                <button id='b3' onClick={(e) => onClickHandler(e)} className='btn'>Lokalnym zbiorkom</button>
            </div>
            <div className='text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </div>
            <div className='content'>
                {currentItems.map(el => {
                    return(
                    <>
                        <div className='element'>
                        <h2>{el}</h2>
                        <p>bla bla bla bla bla</p>
                        </div>
                        <div className='elementname'>
                            Jeszcze jakiś tekst alksfakljds aljkfdalkf lafdshla
                        </div>
                        <hr/>
                    </>
                    )
                })}
            </div>
            </div>
        </div>
        <Pagination itemsPerPage={itemsPerPage} totalItems={array.length} paginate={paginate}/>
        </>
    );
}

export default HomeWhoHelp;