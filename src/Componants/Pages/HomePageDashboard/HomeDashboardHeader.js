import React from 'react';
import { FaCaretDown} from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';


const HomeDashboardHeader = () => {
    return (
      <div className='w-full '>
      {/* Titlebar section start here  */}
       <div className='w-full bg-slate-900 mx-auto rounded-sm px-3 py-3 flex justify-between text-neutral-100'>
        
        <Link to={'/'} className='cursor-pointer p-1'> Skill_CRM </Link>
        <div className='text-xl p-1'> Quarterly KPI Report  </div>
        {/* Profile dropdown start here  */}
         <div className="dropdown dropdown-end">
          <label tabIndex={0} className=" rounded-md p-1 items-center border-none bg-slate-900 hover:bg-slate-700 flex text-neutral-400 hover:text-neutral-200 cursor-pointer"> Roman Sheikh <FaCaretDown/> </label>
            <ul tabIndex={0} className="dropdown-content text-slate-900 font-semibold menu p-2 shadow  h-52 bg-neutral-100 rounded-md ml-1 mt-1 w-52">
             <li><Link to='/'> View profile</Link></li>
             <li><Link to='/'> Your gmail </Link></li>
             <li><Link to='/'> Log out  </Link></li>
          </ul>
         </div>
       {/* Profile dropdown start here  */}
        
     {/* Profile modal start  */}
       {/* <div>      
        <label htmlFor="my-profile" className=" flex text-neutral-400 hover:text-neutral-200 cursor-pointer "> Roman Sheikh <FaCaretDown/> </label>
        <input type="checkbox" id="my-profile" className="modal-toggle" />
        <label htmlFor="my-profile" className="modal cursor-pointer">
        <label className="modal-box relative left-[27%] opacity-1 -top-[26%] w-72" htmlFor="">
          <h3 className="text-lg text-neutral-900 font-bold">Congratulations random Internet user!</h3>
          <p className="py-4 text-black">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </label>
      </label>
      </div> */}
      {/* Profile modal end */}
      </div>

        {/* Quarterly KPI report Navbar start  */}
        <div className='w-full  mt-3   mx-auto rounded-sm  py-3 flex justify-between text-black font-semibold'>
          <div className='text-blue-500 left-0 '> 
              <NavLink className={' mr-2  hover:bg-blue-500 hover:text-neutral-100 p-2 px-3 rounded-sm'} to={'/homepage-dashboard/my-followup-performance'}> My Followup </NavLink>  
              <NavLink className={'  hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm'} to={'/all-leads'}> All Leads </NavLink> 
          </div>
          <div className='text-blue-500'> 
              <NavLink className={' mx-2 hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm '} to={'/homepage-dashboard/kpi-quarterly'}> Quarterly </NavLink>  
              <NavLink className={' mx-2 hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm '} to={'/homepage-dashboard/kpi-monthly'}> Monthly  </NavLink> 
              <NavLink className={' mx-2 hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm '} to={'/homepage-dashboard/kpi-daily'}> Daily  </NavLink> 
          </div>
          <div className='text-green-500'>
              <NavLink className={' mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm'} to={'/homepage-dashboard/kpi-imports'}> Imports </NavLink>  
              <NavLink className={'  bg-green-500 hover:bg-green-700 text-neutral-100 py-2 px-3 rounded-sm'} to={'/'}> Create New Leads </NavLink> 
          </div>
        </div>
      {/* Quarterly KPI report Navbar end  */}

     

     </div>
    );
};

export default HomeDashboardHeader;