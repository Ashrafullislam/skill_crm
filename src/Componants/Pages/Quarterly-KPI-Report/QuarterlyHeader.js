import React from 'react';
import { FaCaretDown} from "react-icons/fa";
import { Link } from 'react-router-dom';


const QuarterlyHeader = () => {
    return (
      <div className='w-full '>
      {/* Titlebar section start here  */}
       <div className='w-3/4 bg-slate-900 mx-auto rounded-sm px-3 py-3 flex justify-between text-neutral-100'>
        
        <Link to={'/'} className='cursor-pointer p-1'> Skill_CRM </Link>
        <div className='text-xl p-1'> Quarterly KPI Report  </div>
        {/* Profile dropdown start here  */}
         <div className="dropdown dropdown-end">
          <label tabIndex={0} className=" rounded-md p-1 items-center border-none bg-slate-900 hover:bg-slate-700 flex text-neutral-400 hover:text-neutral-200 cursor-pointer"> Roman Sheikh <FaCaretDown/> </label>
            <ul tabIndex={0} className="dropdown-content text-slate-900 font-semibold menu p-2 shadow  h-52 bg-neutral-100 rounded-box w-52">
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
      </div>
    );
};

export default QuarterlyHeader;