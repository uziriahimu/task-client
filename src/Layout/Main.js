import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Components/Navbar/Navigation';
import Navbar from '../Components/Navbar/Navigation';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;