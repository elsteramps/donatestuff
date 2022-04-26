import React from 'react';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
