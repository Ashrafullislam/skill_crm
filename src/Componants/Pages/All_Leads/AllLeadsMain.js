import React from 'react';
import { Outlet } from 'react-router';
import AllLeadsHeader from './AllLeadsHeader';

const AllLeadsMain = () => {
    return (
        <div className='px-1'>
            <AllLeadsHeader> </AllLeadsHeader>
            <Outlet> </Outlet>
            
        </div>
    );
};

export default AllLeadsMain;