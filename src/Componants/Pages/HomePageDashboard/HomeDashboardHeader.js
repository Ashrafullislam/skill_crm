import React, { useEffect, useState } from 'react';
import { FaCaretDown} from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';


const HomeDashboardHeader = () => {
  const [country, setCountry] = useState([]);
      useEffect(()=> {
       const FetchCountry = async ()=> {
        try{
          const countryData = await  fetch('../../../public/country.json')
          const Data = await countryData.json()
          setCountry(Data)
        }catch(error){
          console.log('Failed to fetch country data',error)
        }
       }
       FetchCountry()
      },[])


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
       {/* Profile dropdown end here  */}

        

      </div>

        {/* Quarterly KPI report Navbar start  */}
        <div className='w-full  mt-3   mx-auto rounded-sm  py-3 flex justify-between text-black font-semibold'>
          <div className='text-blue-500 left-0 '> 
              <NavLink className={' mr-2 active hover:bg-blue-500 hover:text-neutral-100 p-2 px-3 rounded-sm'} to={'/homepage-dashboard/my-followup-performance'}> My Followup </NavLink>  
              <NavLink className={'  hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm'} to={'/all-leads'}> All Leads </NavLink> 
          </div>
          <div className='text-blue-500'> 
              <NavLink className={' mx-2 hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm '} to={'/homepage-dashboard/kpi-quarterly'}> Quarterly </NavLink>  
              <NavLink className={' mx-2 hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm '} to={'/homepage-dashboard/kpi-monthly'}> Monthly  </NavLink> 
              <NavLink className={' mx-2 hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm '} to={'/homepage-dashboard/kpi-daily'}> Daily  </NavLink> 
          </div>
          <div className='text-green-500'>
              <NavLink className={' mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm'} to={'/homepage-dashboard/kpi-imports'}> Imports </NavLink>  
            
              <label htmlFor="my-modal-3" className=" bg-green-500 hover:bg-green-700 text-neutral-100 py-2 px-3 rounded-sm"> Create New  Leads </label>

          </div>
        </div>
      {/* Quarterly KPI report Navbar end  */}

     
      {/* create new leads modal  */}
        <div> 
         <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold border-b-2">Create New Lead   {country.length} </h3>
               <form>
                 {/* Main div  */}
                 <div className='flex gap-x-5 px-2 '> 

                {/* Left side of form  */}
                 <div>
                   <div className='mt-2'> 
                    <label> Company  </label>
                    <input type='text' name='company' required  className='input input-bordered w-full h-10' />
                   </div>
                   <div className='mt-2'> 
                    <label> Website  </label>
                    <input type='text' required name='website' className='input input-bordered w-full  h-10' />
                   </div>
                   <div className='mt-2'> 
                    <label> Country </label>
                     <select className="border border-gray-300 rounded-md select-bordered w-full  h-10">
                      <option disabled selected> </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                     </select>
                   </div>

                    <div className='mt-2'>
                      <label> Category </label>
                      <select className="border border-gray-300 rounded-md select-bordered w-full  h-10">
                      <option disabled selected> </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                      </select>
                    </div>
                 </div>

                 {/* Right side of form  */}
                    <div> 
                      <div className='mt-2'> 
                        <label> Contact Person  </label>
                        <input type='text' name='contact_person' required className='input input-bordered w-full  h-10' />
                      </div>
                      <div className='mt-2'> 
                        <label> Designation  </label>
                        <input type='text' name='designation' required className='input input-bordered w-full  h-10' />
                      </div>
                      <div className='mt-2'> 
                        <label> Phone </label>
                        <input type='number' name='phone' required className='input input-bordered w-full  h-10' />
                      </div>

                        <div className='mt-2'>
                          <label> Email  </label>
                          <input type='email' name='email' required className='input input-bordered w-full  h-10'/>

                        </div>
                       </div>
                    </div>

                  {/* Description section of form  */}
                  <div className='border-bottom   px-2'>
                  <label> Description  </label>
                  <textarea className="textarea textarea-bordered w-full "  required placeholder=" "></textarea>
                  </div>

                  <div className='flex justify-end  border-t-2 w-full'>
                    <label htmlFor="my-modal-3" className='px-5 py-1 mt-2 bg-red-600 hover:bg-red-800 text-white rounded-sm'> Close  </label>
                    <input type='submit' className='bg-green-500 mt-2 hover:bg-green-700 text-white px-5 py-1 rounded-sm  ml-3' value={'Save'} />
                  </div>
               </form>
            </div>
          </div>
          </div>
     </div>
    );
};

export default HomeDashboardHeader;