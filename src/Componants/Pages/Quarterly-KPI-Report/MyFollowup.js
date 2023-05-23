import React from 'react';

const MyFollowup = () => {
    return (
    <div className='w-full mx-auto mt-5'>
      {/* Quarterly KPI Report table start here  */}
       <div className="overflow-x-auto">
          <table className="table w-full ">
            {/* head*/}
            <thead className=''>
              <tr className=''>
                <th className='bg-blue-500 rounded-tl-sm rounded-bl-sm  font-extrabold '> Quarter</th>
                <th className='bg-blue-500   font-extrabold '> Criteria</th>
                <th className='bg-blue-500   font-extrabold '> New Call </th>
                <th className='bg-blue-500   font-extrabold '> High Lead</th>
                <th className='bg-blue-500   font-extrabold '> New Test </th>
                <th className='bg-blue-500   font-extrabold '> New File </th>
                <th className='bg-blue-500 rounded-tr-sm rounded-br-sm font-extrabold '> Overall </th>
              </tr>
            </thead>
            <tbody className='border font-semibold body-col  '>
              {/* row 1 */}
                <tr className='h-4 bg-gray-200 border-none '>
                <th className='h-3 bg-gray-200 border-none'>  </th>
                <td className='h-3 bg-gray-200 border'> Target</td>
                <td className='h-3 bg-gray-200 border'> 0 </td>
                <td className='h-3 bg-gray-200 border'> 0 </td>
                <td className='h-3 bg-gray-200 border'> 0 </td>
                <td className='h-3 bg-gray-200 border'> 0 </td>
                <td className='h-3 bg-gray-200 border-none'> </td>
              </tr >
              {/* row 2 */}
              <tr className="  bg-gray-200  font-semibold">
                <th className='bg-gray-200 text-blue-500 border-none'>2022_Q2</th>
                <td className='text-slate-900 border'> Archieve </td>
                <td className='text-slate-900 border'> 106 </td>
                <td className='text-slate-900 border'> 23 </td>
                <td className='text-slate-900 border'> 4 </td>
                <td className='text-slate-900 border'> 0 </td>
                <td className='bg-gray-200 text-slate-900 border-none text-3xl'>0 % </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th className=' bg-gray-200  '> </th>
                <td className=' bg-gray-200 border '> Efficiency </td>
                <td className=' bg-gray-200 border '> 0%</td>
                <td className=' bg-gray-200 border '> 0% </td>
                <td className=' bg-gray-200 border text-slate-900'> 0% </td>
                <td className=' bg-gray-200 border text-slate-900'> 0%  </td>
                <td className=' bg-gray-200  text-slate-900'>  </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div className='w-full h-2 bg-gray-400'> </div>
     </div>
    );
};

export default MyFollowup;