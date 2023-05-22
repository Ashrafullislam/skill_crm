import React from 'react';
import { FaCaretDown} from "react-icons/fa";


const QuarterlyHeader = () => {
    return (
      <div className='w-full '>
      {/* Titlebar section start here  */}
       <div className='w-3/4 bg-slate-900 mx-auto rounded-sm px-3 py-3 flex justify-between text-neutral-100'>
        
          <div> Skill_CRM </div>
          <div className='text-xl'> Quarterly KPI Report  </div>
          <div className='flex text-neutral-400'> Roman Sheikh <FaCaretDown/> </div>
          {/* <!--Button trigger small modal--> */}
         
          
          

       </div>
      </div>
    );
};

export default QuarterlyHeader;