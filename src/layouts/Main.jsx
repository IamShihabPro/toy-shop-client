import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/NavBar/NavBar';



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-345px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>   
        </div>
    );
};

export default Main;