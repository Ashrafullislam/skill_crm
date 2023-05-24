import React from 'react';
import { Outlet } from 'react-router';
import HomeDashboardHeader from './HomeDashboardHeader';

const HomePageDashboard = () => {
    return (
        <div className='w-4/5 mx-auto'>
        <HomeDashboardHeader> </HomeDashboardHeader>
         <Outlet> </Outlet>          
        </div>
    );
};

export default HomePageDashboard;