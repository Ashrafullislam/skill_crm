import React from 'react';
import QuarterlyHeader from './QuarterlyHeader';
import { Outlet } from 'react-router';

const QuarterlyReport = () => {
    return (
        <div className=''>
        <QuarterlyHeader> </QuarterlyHeader>  
         <Outlet> </Outlet>          
        </div>
    );
};

export default QuarterlyReport;