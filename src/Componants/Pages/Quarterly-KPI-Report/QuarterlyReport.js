import React from 'react';
import QuarterlyHeader from './QuarterlyHeader';
import { Outlet } from 'react-router';

const QuarterlyReport = () => {
    return (
        <div className='w-3/4 mx-auto'>
        <QuarterlyHeader> </QuarterlyHeader>  
         <Outlet> </Outlet>          
        </div>
    );
};

export default QuarterlyReport;