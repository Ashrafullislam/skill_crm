import React, { useEffect, useState } from 'react';
import {  FaTelegramPlane } from 'react-icons/fa';

const MyFollowUp = () => {


   const [userData,setUserData] = useState([]);
   
   useEffect(()=> {
     const FetchData = async ()=> {
      try{
         const response = await fetch ('../../../followupData.json');
         const data = await response.json()
         setUserData(data)

      }catch(error){
        console.log("Failed to fetch data ",error)
      }
     }
     FetchData()
   },  [])
   
   console.log(userData)
    return (
         <div className='w-full '>
             <div className="overflow-x-auto">
          <table className=" w-full  ">
            {/* head*/}
            <thead className=''>
              <tr className='border'>
                <th className='bg-blue-500 rounded-tl-sm    py-3 rounded-bl-sm  font-bold'> SL </th>
                <th className='bg-blue-500  font-bold  py-3'> Company </th>
                <th className='bg-blue-500  font-bold  py-3'> Country </th>
                <th className='bg-blue-500  font-bold  py-3'> Website  </th>
                <th className='bg-blue-500  font-bold  py-3'> Category </th>
                <th className='bg-blue-500  font-bold  py-3'> Minor  </th>
                <th className='bg-blue-500  font-bold  py-3'> Follower</th>
                <th className='bg-blue-500  font-bold  py-3'> Status </th>
                <th className='bg-blue-500  font-bold  py-3 '> Possiblity  </th>
                <th className='bg-blue-500  font-bold  py-3'> Next Followup </th>
                <th className='bg-blue-500  font-bold  py-3'> Created At </th>
                <th className='bg-blue-500  font-bold  py-3'> Phone </th>
                <th className='bg-blue-500 rounded-tr-sm    py-3 rounded-br-sm font-bold '> Action </th>
              </tr>
            </thead>
            <tbody className='border font-semibold body-col  '>
              {/* row 1 */}
                {userData.map((userInfo,index) => (
                <tr key={index} className='h-4 bg-gray-200 border border-slate-300 '>
                <th className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {index+1}   </th>
                <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.company} </td>
                <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.country} </td>
                <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.website} </td>
                <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.category} </td>
                <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.minor} </td>
                <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.follower} </td>
                <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.status} </td>
                <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.possibility} </td>
                <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.next_followup} </td>
                <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1 w-24 '> {userInfo.created_at} </td>
                <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> {userInfo.phone} </td>
                <td className='h-3 bg-gray-200 border border-slate-300 py-0 text-center px-0  m-1'> <button className='px-3 py-2 '> 
                <FaTelegramPlane className='text-blue-500 hover:text-blue-700 text-xl regplane'/> </button>  </td>
                </tr>
                ))}
                 
              
            </tbody>
          </table>
         </div>
            
        </div>
    );
};

export default MyFollowUp;