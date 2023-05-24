import React, { useEffect, useState } from 'react';
import data from '../../../followupData.json' ;

const MyFollowUp = () => {

const FollowupData = 
[
   {
      "_id": 1,
      "company":"Larido Studio",
      "country": " Poland",
      "website": " larido.com",
      "category": " Agency ",
      "minor": "Tafannom  Mailat ",
      "follower":" Tafannom Mailat",
      "status": " Others ",
      "possibility": " ",
      "next-followup": " 03 Jun 2023",
      "created-at": " 14 May 2023 04.22 PM",
      "phone": " 014578477455" 
    
     },
     {
       "_id": 2,
      "company":"Larido Studio",
      "country": " Poland",
      "website": " larido.com",
      "category": " Agency ",
      "minor": "Tafannom  Mailat ",
      "follower":" Tafannom Mailat",
      "status": " Others ",
      "possibility": " ",
      "next-followup": " 03 Jun 2023",
      "created-at": " 14 May 2023 04.22 PM",
      "phone": " 014578477455" 
    
     },
     {
       "_id": 3,
      "company":"Larido Studio",
      "country": " Poland",
      "website": " larido.com",
      "category": " Agency ",
      "minor": "Tafannom  Mailat ",
      "follower":" Tafannom Mailat",
      "status": " Others ",
      "possibility": " ",
      "next-followup": " 03 Jun 2023",
      "created-at": " 14 May 2023 04.22 PM",
      "phone": " 014578477455" 
    
     },
     {
       "_id": 4,
      "company":"Larido Studio",
      "country": " Poland",
      "website": " larido.com",
      "category": " Agency ",
      "minor": "Tafannom  Mailat ",
      "follower":" Tafannom Mailat",
      "status": " Others ",
      "possibility": " ",
      "next-followup": " 03 Jun 2023",
      "created-at": " 14 May 2023 04.22 PM",
      "phone": " 014578477455" 
    
     },
     {
       "_id": 5,
      "company":"Larido Studio",
      "country": " Poland",
      "website": " larido.com",
      "category": " Agency ",
      "minor": "Tafannom  Mailat ",
      "follower":" Tafannom Mailat",
      "status": " Others ",
      "possibility": " ",
      "next-followup": " 03 Jun 2023",
      "created-at": " 14 May 2023 04.22 PM",
      "phone": " 014578477455" 
    
     },
     {
       "_id": 6,
      "company":"Larido Studio",
      "country": " Poland",
      "website": " larido.com",
      "category": " Agency ",
      "minor": "Tafannom  Mailat ",
      "follower":" Tafannom Mailat",
      "status": " Others ",
      "possibility": " ",
      "next-followup": " 03 Jun 2023",
      "created-at": " 14 May 2023 04.22 PM",
      "phone": " 014578477455" 
    
     },
     {
       "_id": 7,
      "company":"Larido Studio",
      "country": " Poland",
      "website": " larido.com",
      "category": " Agency ",
      "minor": "Tafannom  Mailat ",
      "follower":" Tafannom Mailat",
      "status": " Others ",
      "possibility": " ",
      "next-followup": " 03 Jun 2023",
      "created-at": " 14 May 2023 04.22 PM",
      "phone": " 014578477455" 
    
     }
     
   ]

   useEffect(()=> {
      fetch(data)
      .then(res => res.json())
      .then(newData => {
        console.log(newData)
      })
   },[])
   
   
    return (
         <div className='w-full '>
             <div className="overflow-x-auto">
                <h3>  </h3>
          <table className="table w-full  ">
            {/* head*/}
            <thead className=''>
              <tr className='border'>
                <th className='bg-blue-500 rounded-tl-sm rounded-bl-sm  font-extrabold'> SL </th>
                <th className='bg-blue-500  font-extrabold '> Company </th>
                <th className='bg-blue-500  font-extrabold '> Country </th>
                <th className='bg-blue-500  font-extrabold '> Website  </th>
                <th className='bg-blue-500  font-extrabold '> Category </th>
                <th className='bg-blue-500  font-extrabold '> Minor  </th>
                <th className='bg-blue-500  font-extrabold '> Follower</th>
                <th className='bg-blue-500  font-extrabold '> Status </th>
                <th className='bg-blue-500  font-extrabold '> Possibility  </th>
                <th className='bg-blue-500  font-extrabold '> Next Followup </th>
                <th className='bg-blue-500  font-extrabold '> Created At </th>
                <th className='bg-blue-500  font-extrabold '> Phone </th>
                <th className='bg-blue-500 rounded-tr-sm rounded-br-sm font-extrabold '> Action </th>
              </tr>
            </thead>
            <tbody className='border font-semibold body-col  '>
              {/* row 1 */}
                <tr className='h-4 bg-gray-200 border border-slate-300 '>
                <th className='h-3 bg-gray-200 border border-slate-300'> 1 </th>
                <td className='h-3 bg-gray-200 border border-slate-300'> 2</td>
                <td className='h-3 bg-gray-200 border border-slate-300'> 3 </td>
                <td className='h-3 bg-gray-200 border border-slate-300'> 4 </td>
                <td className='h-3 bg-gray-200 border border-slate-300'> 5 </td>
                <td className='h-3 bg-gray-200 border border-slate-300'> 6 </td>
                <td className='h-3 bg-gray-200 border border-slate-300'> 7 </td>
                <td className='h-3 bg-gray-200 border border-slate-300'> 8 </td>
                <td className='h-3 bg-gray-200 border border-slate-300'> 9 </td>
                <td className='h-3 bg-gray-200 border border-slate-300'> 10 </td>
                <td className='h-3 bg-gray-200 border border-slate-300'> 11 </td>
                <td className='h-3 bg-gray-200 border border-slate-300'> 12 </td>
                <td className='h-3 bg-gray-200 border border-slate-300'> 13</td>
              </tr >
              {/* row 2 */}
              <tr className=" bg-gray-200  font-semibold">
                <th className=' text-blue-500 border-slate-300'>2</th>
                <td className=' text-slate-900 border border-slate-300'> 2</td>
                <td className=' text-slate-900 border border-slate-300'> 3 </td>
                <td className=' text-slate-900 border border-slate-300'> 4 </td>
                <td className=' text-slate-900 border border-slate-300'> 5 </td>
                <td className=' text-slate-900 border border-slate-300'> 6 </td>
                <td className=' text-slate-900 border border-slate-300'> 7 </td>
                <td className=' text-slate-900 border border-slate-300'>8 </td>
                <td className=' text-slate-900 border border-slate-300'>9 </td>
                <td className=' text-slate-900 border border-slate-300'>10 </td>
                <td className=' text-slate-900 border border-slate-300'>11 </td>
                <td className=' text-slate-900 border border-slate-300'>12 </td>
                <td className=' text-slate-900 border border-slate-300'>13 </td>
                </tr>
             
              
            </tbody>
          </table>
         </div>
            
        </div>
    );
};

export default MyFollowUp;