import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Toaster/>
        </div>
    );
};

export default MainLayout;