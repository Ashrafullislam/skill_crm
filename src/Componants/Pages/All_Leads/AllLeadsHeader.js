import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const AllLeadsHeader  = () => {
    return (
      <div>
    {/* Titlebar section start here  */}
    <div className='w-3/4  bg-slate-900 mx-auto rounded-sm px-3 py-2 flex justify-between text-neutral-100'>
        
      <Link to={'/'} className='cursor-pointer p-1'> Skill_CRM </Link>
        <div className='text-xl p-1'> Total Showing Leads :  </div>
        {/* Profile dropdown start here  */}
         <div className="dropdown dropdown-end">
          <label tabIndex={0} className=" rounded-md p-1 items-center border-none bg-slate-900 hover:bg-slate-700 flex text-neutral-400 hover:text-neutral-200 cursor-pointer"> Roman Sheikh <FaCaretDown/> </label>
            <ul tabIndex={0} className="dropdown-content text-slate-900 font-semibold menu p-2 shadow  h-52 bg-neutral-100 rounded-md ml-1 mt-1 w-52">
             <li><Link to='/'> View profile</Link></li>
             <li><Link to='/'> Your gmail </Link></li>
             <li><Link to='/'> Log out  </Link></li>
          </ul>
         </div>
         {/* Profile dropdown end here  */}
        </div>
       

     {/* Search Filter section start here  */}
     <section className='w-full flex justify-between mt-3 px-2 bg-slate-100 py-2 font-semibold text-black'>
      <div> 
      <label> Minor:</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>

      <div> 
      <label> Status :</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>
     
      <div> 
      <label> Possibility :</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>

      <div> 
      <label> Country :</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>

      <div> 
      <label> Category :</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>

      <div> 
      <label> To :</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>

      <div> 
      <label> From :</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>

       <button  type='submit' className=' border border-blue-400 p-1 text-blue-400 hover:bg-blue-300 hover:text-white hover:border-white' > Apply Filter  </button>
      </section>

       

       {/* Search Filter section end here  */}


         {/* All Leads Navbar  */}
           <section className='w-full '> 
            <div className='w-full  mt-2 bg-neutral-50  mx-auto rounded-sm  py-3 flex justify-between items-center text-black font-semibold'>
          <div className='text-blue-500 left-0 '> 
              <NavLink className={' mr-2  hover:bg-blue-500 hover:text-neutral-100 p-2 px-3 rounded-sm'} to={'/all-leads/my-followup'}> My Follow-up </NavLink>  
              <NavLink className={'  hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm'} to={'/all-leads/assign-leads'}>Assign Leads </NavLink> 
              <NavLink className={'  hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm'} to={'/all-leads/fresh-leads'}> Fresh Leads </NavLink> 
              <NavLink className={'  hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm'} to={'/all-leads/all-leads-data'}> All Leads </NavLink> 
          </div>

           <div className='flex'>
           <input type="search" placeholder=" Search " className="input input-bordered rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none  w-80" />
           <button type='submit' className='  px-2 py-2  border border-blue-300 hover:bg-blue-300 hover:text-white text-blue-500 cursor-pointer  rounded-tr-md rounded-br-md ' >  Search  </button>
           </div>

          <div className='text-green-500'>
              <div>
              <NavLink className={' mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm'} to={'/'}> Filter Leads  </NavLink>  
              <NavLink className={' mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm'} to={'/'}> Favourite  Leads  </NavLink>  
              <NavLink className={' mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm'} to={'/'}> Touch Leads  </NavLink>  
              </div>
              <div className=' flex justify-end '>
              <NavLink className={'  bg-green-500 hover:bg-green-700 text-neutral-100 py-2 px-3 rounded-sm mt-2'} to={'/'}> Create New Leads </NavLink> 
              </div>
          </div>
        </div>
        </section>
          {/* All Leads Navbar end here   */}


      </div>
    );
};

export default AllLeadsHeader ;