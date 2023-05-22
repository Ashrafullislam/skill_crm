import React from 'react';
import { FaCaretDown} from "react-icons/fa";
import { Link } from 'react-router-dom';


const QuarterlyHeader = () => {
    return (
      <div className='w-full '>
      {/* Titlebar section start here  */}
       <div className='w-3/4 bg-slate-900 mx-auto rounded-sm px-3 py-3 flex justify-between text-neutral-100'>
        
        <Link to={'/'} className='cursor-pointer'> Skill_CRM </Link>
        <div className='text-xl'> Quarterly KPI Report  </div>
        
        <div>      
        {/* <!-- Button trigger modal --> */}
      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className=" flex text-neutral-400 hover:text-neutral-200 cursor-pointer "> Roman Sheikh <FaCaretDown/> </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative left-[26%] -top-[26%] w-80" htmlFor="">
          <h3 className="text-lg text-neutral-900 font-bold">Congratulations random Internet user!</h3>
          <p className="py-4 text-black">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </label>
      </label>
      </div>

 
       </div>
      </div>
    );
};

export default QuarterlyHeader;