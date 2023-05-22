import React from 'react';
import { Link} from 'react-router-dom';

const Login = () => {
    return (
 <div className='w-full'>
  {/* Login navbar section start here  */}
   <nav
  class="relative flex w-3/4 mx-auto flex-nowrap items-center justify-between rounded-sm bg-slate-900 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-3"
  data-te-navbar-ref>
  <div class="flex w-full flex-wrap items-center justify-between px-3">
    <button
      class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContent3"
      aria-controls="navbarSupportedContent3"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-7 w-7">
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </button>

    <div
      class="!visible mt-2 hidden flex-grow basis-[100%] items-center  lg:mt-0 lg:!flex lg:basis-auto"
      id="navbarSupportedContent3"
      data-te-collapse-item>

      <a class="pr-2 text-xl text-slate-100 dark:text-neutral-200" href="/"
        >Navbar</a>
      <ul
        class="list-style-none ml-auto flex flex-col pl-0 lg:flex-row "
        data-te-navbar-nav-ref>
        {/* { Login navlink option } */}
        <li class="my-4 lg:my-0 lg:pr-2" data-te-nav-item-ref>
          <Link to={'/login'}
            class="  lg:px-2 text-neutral-500 hover:text-slate-200"
            aria-current="page"
            data-te-nav-a-ref
            >Login</Link>
        </li>

        <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <Link to={'/signup'}
            class="p-0 text-neutral-500 hover:text-slate-200  "
            data-te-nav-a-ref
            > Sign up</Link>
        </li>

  {/* Optional */}
  <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <Link to={'/quarterly-report'}
            class="p-0 text-neutral-500 hover:text-slate-200  "
            data-te-nav-a-ref
            > Quarterly </Link>
        </li>

       
       </ul>
      </div>
     </div>
   </nav>

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