import React from 'react';
import Home4Steps from './Home4Steps';
import HomeAboutUs from './HomeAboutUs';
import HomeContacts from './HomeContacts';
import HomeFooter from './HomeFooter';
import HomeHeaderMenu from './HomeHeaderMenu';
import HomeHelpUs from './HomeHelpUs';
import HomeThreeColumn from './HomeThreeColumn';
import HomeWhoHelp from './HomeWhoHelp';

function Home() {
    return (
        <>
           <HomeHeaderMenu/>
           <HomeThreeColumn/>
           <Home4Steps/>
           <HomeAboutUs/>
           <HomeWhoHelp/>
           <HomeContacts/>
           <HomeFooter/> 
        </>
    );
}

export default Home;