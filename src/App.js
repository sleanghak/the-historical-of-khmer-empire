import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Civilization from './pages/civilization';
import History from './pages/history';
import NotFound from './pages/404';
import Art from './pages/art';


const App = () => {
    return (
        <BrowserRouter>
            {/* <NavBar> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/history' element={<History />} />
                <Route path='/civilization' element={<Civilization />} />
                <Route path='/art' element={<Art />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            {/* </NavBar> */}
        </BrowserRouter>
    );
};
export default App;
