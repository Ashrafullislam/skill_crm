import React from 'react';
import { Link} from 'react-router-dom';
import RegisterNav from './RegisterNav';

const Login = () => {
    return (
 <div className='w-full'>
  {/* Login navbar section start here  */}
   <RegisterNav></RegisterNav>

     {/* Login form section start here  */}
     <div
  class="block w-3/5 mx-auto mt-4 rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div
    class="border-b-2 border-slate-200 text-start px-4 rounded-t-md py-3 bg-neutral-200 dark:border-neutral-600 dark:text-neutral-50">
    Login 
  </div>

  <form class="p-6 items-start  flex flex-col rounded-b-md font-semibold">
    <div className='flex gap-3'>
      <h3 className='w-36 '> E-Mail Address  </h3>
      <div class="relative mb-3" data-te-input-wrapper-init>
      <input
        type="email"
        name={'email'}
        class="w-80 py-2 border hover:bg-yellow-100 " 
        placeholder=" Enter your email" required />
      </div>
    </div>

   <div className='flex gap-3'>
      <h3 className='w-36 text-center'> Password</h3>
      <div>
        <input
        type="password"
        name={'password'}
        class="w-80 py-2 border hover:bg-yellow-100" 
        placeholder=" Enter your password" required /> 
        
        <div>
          <div className="form-control  mt-3   ">
          <label className="cursor-pointer label justify-start gap-2 items-center ">
          <input type="checkbox" name='login_checked' className="checkbox checkbox-info w-4 h-4 "  />
          <span className="label-text   font-semibold">Remember me</span>
          </label>
          </div>
            
            <div className='float-left mt-3'>
              <input value={'Login'} type='submit' className='  bg-sky-600 border-none text-neutral-100 px-4 py-2 rounded-md hover:bg-sky-800'/> 
              <Link to={'/'} className='text-blue-500'> Forgot your password ?  </Link>
            </div>

        </div>
      <div>

       </div>
      </div>
     </div>

  </form>
</div>
    

  </div>
    );
};

export default Login;